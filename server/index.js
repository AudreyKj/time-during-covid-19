const express = require("express");
const path = require("path");
const cors = require("cors");
const { pool } = require("./db.js");
const bodyParser = require("body-parser");
const sslRedirect = require('heroku-ssl-redirect').default
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(sslRedirect());

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

//POST like 
app.post("/giveLike", async (req, res) => {
  try {
    const timestamp = Math.floor(Date.now() / 1000);
    await pool.query(
      "INSERT INTO heart_likes(created_at) VALUES($1) RETURNING *",
      [timestamp]
    );
    return res.status(200).json({ status: "ok" })
  } catch (error) {
    console.log("error post like", error)
    return res.json({ error: error.message });
  }
});


//GET number of likes 
app.get("/getLikes", async (req, res) => {
  try {
    const getLikeCount = await pool.query(
      "SELECT COUNT(heart_id) FROM heart_likes"
    );
    return res.json(getLikeCount.rows);
  } catch (error) {
    console.log("error get likes", error)
    return res.json({ error: error.message });
  }
});

//POST time perception changed: assertion
app.post("/user/timePerception/assertion", async (req, res) => {
  try {
    await pool.query(
      "INSERT INTO time_perception(assertion) VALUES(true) RETURNING *",
    );
    return res.status(200).json({ status: "ok" })
  } catch (error) {
    console.log("error post time perception:yes", error)
    return res.json({ error: error.message });
  }
});

//POST time perception changed: negation 
app.post("/user/timePerception/negation", async (req, res) => {
  try {
    await pool.query(
      "INSERT INTO time_perception(negation) VALUES(true) RETURNING *",
    );
    return res.status(200).json({ status: "ok" })
  } catch (error) {
    console.log("error post time perception:no", error)
    return res.json({ error: error.message });
  }
});


//POST mood representation: tornado 
app.post("/user/moodRepresentation/tornado", async (req, res) => {
  try {
    await pool.query(
      "INSERT INTO mood_representation(tornado) VALUES(true) RETURNING *"
    );
    return res.status(200).json({ status: "ok" })
  } catch (error) {
    console.log("error post tormento", error)
    return res.json({ error: error.message });
  }
});


//POST mood representation: rose
app.post("/user/moodRepresentation/rose", async (req, res) => {
  try {
    await pool.query(
      "INSERT INTO mood_representation(rose) VALUES(true) RETURNING *"
    );
    return res.status(200).json({ status: "ok" })
  } catch (error) {
    console.log("error post rose", error)
    return res.json({ error: error.message });
  }
});



//POST mood representation: seed
app.post("/user/moodRepresentation/seed", async (req, res) => {
  try {
    await pool.query(
      "INSERT INTO mood_representation(seed) VALUES(true) RETURNING *"
    );
    return res.status(200).json({ status: "ok" })
  } catch (error) {
    console.log("error post seed", error)
    return res.json({ error: error.message });
  }
});

//POST user's feeling: fear
app.post("/user/feeling/fear", async (req, res) => {
  try {
    await pool.query(
      "INSERT INTO user_feeling(fear) VALUES(true) RETURNING *",
    );
    return res.status(200).json({ status: "ok" })
  } catch (error) {
    console.log("error post fear future", error)
    return res.json({ error: error.message });
  }
});

//POST user's feeling: nostalgia 
app.post("/user/feeling/nostalgia", async (req, res) => {
  try {
    await pool.query(
      "INSERT INTO user_feeling(nostalgia) VALUES(true) RETURNING *",
    );
    return res.status(200).json({ status: "ok" })
  } catch (error) {
    console.log("error post nostalgia", error)
    return res.json({ error: error.message });
  }
});

//POST user's feeling: normal
app.post("/user/feeling/normal", async (req, res) => {
  try {
    await pool.query(
      "INSERT INTO user_feeling(normal) VALUES(true) RETURNING *",
    );
    res.status(200).json({ status: "ok" })
  } catch (error) {
    console.log("error post fine feeling", error)
    return res.json({ error: error.message });
  }
});


//GET time perception survey results
app.get("/users/timePerception/results", async (req, res) => {
  try {
    const noAnswers = await pool.query(
      "SELECT COUNT(negation) FROM time_perception"
    );
    const yesAnswers = await pool.query(
      "SELECT COUNT(assertion) FROM time_perception"
    );

    const no = parseInt(noAnswers.rows[0].count)
    const yes = parseInt(yesAnswers.rows[0].count)

    const totalNumber = no + yes;
    const yesPercentage = Math.floor((yes / totalNumber) * 100)
    const noPercentage = Math.floor((no / totalNumber) * 100)

    let results;

    if (yesPercentage > noPercentage) {
      results = [{ 'YES': yesPercentage }, { 'NO': noPercentage }]
    } else {
      results = [{ 'NO': noPercentage }, { 'YES': yesPercentage }]
    }

    return res.json(results)
  } catch (error) {
    return res.json({ error: error.message });
  }
});

//GET users' feeling survey results
app.get("/users/feeling/results", async (req, res) => {
  try {
    const fearAnswers = await pool.query(
      "SELECT COUNT(fear) FROM user_feeling"
    );
    const nostalgiaAnswers = await pool.query(
      "SELECT COUNT(nostalgia) FROM user_feeling"
    );
    const fineAnswers = await pool.query(
      "SELECT COUNT(normal) FROM user_feeling"
    );

    const fear = parseInt(fearAnswers.rows[0].count)
    const nostalgia = parseInt(nostalgiaAnswers.rows[0].count)
    const fine = parseInt(fineAnswers.rows[0].count)

    const totalNumber = fear + nostalgia + fine;
    const fearPercentage = Math.floor((fear / totalNumber) * 100)
    const nostalgiaPercentage = Math.floor((nostalgia / totalNumber) * 100)
    const finePercentage = Math.floor((fine / totalNumber) * 100)

    let results;

    const fearBiggest = fearPercentage > nostalgiaPercentage && fearPercentage > finePercentage;
    const nostalgiaBiggerFine = nostalgiaPercentage > finePercentage;
    const fineBiggerNostalgia = finePercentage > nostalgiaPercentage;

    const nostalgiaBiggest = nostalgiaPercentage > fearPercentage && nostalgiaPercentage > finePercentage;
    const fearBiggerFine = fearPercentage > finePercentage;
    const fineBiggerFear = finePercentage > fearPercentage;

    const fineBiggest = finePercentage > nostalgiaPercentage && finePercentage > fearPercentage;
    const nostalgiaBiggerFear = nostalgiaPercentage > fearPercentage;
    const fearBiggerNostalgia = fearPercentage > nostalgiaPercentage;


    if (fearBiggest && nostalgiaBiggerFine) {
      results = [{ 'FEARFUL': fearPercentage }, { 'NOSTALGIC': nostalgiaPercentage }, { 'FINE': finePercentage }]
    }

    if (fearBiggest && fineBiggerNostalgia) {
      results = [{ 'FEARFUL': fearPercentage }, { 'FINE': finePercentage }, { 'NOSTALGIC': nostalgiaPercentage }]
    }

    if (nostalgiaBiggest && fearBiggerFine) {
      results = [{ 'NOSTALGIC': nostalgiaPercentage }, { 'FEARFUL': fearPercentage }, { 'FINE': finePercentage }]
    }

    if (nostalgiaBiggest && fineBiggerFear) {
      results = [{ 'NOSTALGIC': nostalgiaPercentage }, { 'FINE': finePercentage }, { 'FEARFUL': fearPercentage }]
    }


    if (fineBiggest && nostalgiaBiggerFear) {
      results = [{ 'FINE': finePercentage }, { 'NOSTALGIC': nostalgiaPercentage }, { 'FEARFUL': fearPercentage }]
    }

    if (fineBiggest && fearBiggerNostalgia) {
      results = [{ 'FINE': finePercentage }, { 'FEARFUL': fearPercentage }, { 'NOSTALGIC': nostalgiaPercentage }]
    }

    return res.json(results)

  } catch (error) {
    console.log("error: get results feelings survey", error)
    return res.json({ error: error.message });
  }
});

//GET users' mood survey results
app.get("/users/mood/results", async (req, res) => {
  try {
    const tornadoAnswers = await pool.query(
      "SELECT COUNT(tornado) FROM mood_representation"
    );
    const roseAnswers = await pool.query(
      "SELECT COUNT(rose) FROM mood_representation"
    );
    const seedAnswers = await pool.query(
      "SELECT COUNT(seed) FROM mood_representation"
    );

    const tornado = parseInt(tornadoAnswers.rows[0].count)
    const rose = parseInt(roseAnswers.rows[0].count)
    const seed = parseInt(seedAnswers.rows[0].count)

    const totalNumber = tornado + rose + seed;
    const tornadoPercentage = Math.floor((tornado / totalNumber) * 100)
    const rosePercentage = Math.floor((rose / totalNumber) * 100)
    const seedPercentage = Math.floor((seed / totalNumber) * 100)

    let result;

    const tornadoBiggest = tornadoPercentage > rosePercentage && tornadoPercentage > seedPercentage
    const roseBiggerSeed = rosePercentage > seedPercentage
    const seedBiggerRose = seedPercentage > rosePercentage

    const roseBiggest = rosePercentage > tornadoPercentage && rosePercentage > seedPercentage
    const tornadoBiggerSeed = tornadoPercentage > seedPercentage
    const seedBiggerTornado = seedPercentage > tornadoPercentage

    const seedBiggest = seedPercentage > tornadoPercentage && seedPercentage > rosePercentage
    const tornadoBiggerRose = tornadoPercentage > rosePercentage
    const roseBiggerTornado = rosePercentage > tornadoPercentage


    if (tornadoBiggest && roseBiggerSeed) {
      result = [{ '🌪️': tornadoPercentage }, { '🥀': rosePercentage }, { '🌱': seedPercentage }]
    }

    if (tornadoBiggest && seedBiggerRose) {
      result = [{ '🌪️': tornadoPercentage }, { '🌱': seedPercentage }, { '🥀': rosePercentage }]
    }

    if (roseBiggest && seedBiggerTornado) {
      result = [{ '🥀': rosePercentage }, { '🌱': seedPercentage }, { '🌪️': tornadoPercentage }]
    }

    if (roseBiggest && tornadoBiggerSeed) {
      result = [{ '🥀': rosePercentage }, { '🌪️': tornadoPercentage }, { '🌱': seedPercentage }]
    }

    if (seedBiggest && tornadoBiggerRose) {
      result = [{ '🌱': seedPercentage }, { '🌪️': tornadoPercentage }, { '🥀': rosePercentage }]
    }

    if (seedBiggest && roseBiggerTornado) {
      result = [{ '🌱': seedPercentage }, { '🥀': rosePercentage }, { '🌪️': tornadoPercentage }]
    }

    return res.json(result ?? [{ '🌪️': tornadoPercentage }, { '🥀': rosePercentage }, { '🌱': seedPercentage }])

  } catch (error) {
    console.log("error: get results mood survey", error)
    return res.json({ error: error.message });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(process.env.PORT || 5000);
