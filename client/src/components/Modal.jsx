import React from "react";
import PropTypes from 'prop-types';
import ReactPlayer from "react-player"
import { ModalArticle } from './ModalArticle'


export function Modal({ image }) {
    let media = null;

    if (image === "march21_refinery") {
        const title = "Why does time feels weird during the COVID pandemic?"
        const text = "Whereas previous months felt like they lasted a million years, March has felt relatively normal because I’ve developed a method through which I can literally see the passage of time in front of me. Otherwise, I would have continued to have the disorienting sense that time is fake, slippery."
        const link = "https://www.refinery29.com/en-us/2021/03/10332829/why-does-time-feel-weird-covid-pandemic"
        const source = "Refinery29"

        media = <div className="modalContainer modalLeft backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div>
    }


    if (image === "march21_normal.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/santiagomayer_/status/1367275397604204545", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march21/march21_normal.jpg" alt="tweet" />
        </div >
    }


    if (image === "march21_always.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/ChuckWendig/status/1366197263345803264", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march21/march21_always.jpg" alt="tweet" />
        </div >
    }


    if (image === "march21_mars.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/NASAPersevere/status/1372614596175962112", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march21/march21_mars.jpg" alt="tweet" />
        </div >
    }



    if (image === "march21_dan.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/dan_abramov/status/1369478018087981058", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march21/march21_dan.jpg" alt="tweet" />
        </div >
    }



    if (image === "march21_video_capsule") {
        media = <div className="modalContainer modalRight">
            <iframe title="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/ihR1VoCyjeQ?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    }


    if (image === "march21_zoomEscaper") {
        media = <div className="modalContainer modalLeft">
            <iframe title="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/r_LhwsMAaAc?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div >

    }


    if (image === "march21_reasons.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/hellolanemoore/status/1366457738159677441", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march21/march21_reasons.jpg" alt="tweet" />
        </div >
    }


    if (image === "march21_vaccine.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://www.instagram.com/p/CM155Gssi3M/", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march21/march21_vaccine.jpg" alt="tweet" />
        </div >

    }



    if (image === "march21_me.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/oncracksam/status/1366840347100209152", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march21/march21_me.jpg" alt="tweet" />
        </div >
    }


    if (image === "march21_lana.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/cherrylilacs/status/1372623291496636418", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march21/march21_lana.jpg" alt="tweet" />
        </div >
    }



    if (image === "march21_wired") {
        const title = "The Perplexing Psychology of Returning to ‘Normal’"
        const text = `For a year now, we’ve been living in constant fear of Covid-19. But when you get that vaccine in your arm, it’s not like your stress will magically melt away.`
        const link = "https://www.wired.com/story/the-perplexing-psychology-of-returning-to-normal/"
        const source = "The Wired"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div>
    }


    if (image === "march21_slowMo.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/itsafronomics/status/1367232740022751233", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march21/march21_slowMo.jpg" alt="tweet" />
        </div >
    }


    if (image === "march21_bin.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/danielhowell/status/1366483132313141253", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march21/march21_bin.jpg" alt="tweet" />
        </div >
    }


    if (image === "march21_tiger.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/betchesluvthis/status/1373273510144016388", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march21/march21_tiger.jpg" alt="tweet" />
        </div >
    }


    if (image === "march21_marchAgain.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/k8siegel/status/1366486170813816832", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march21/march21_marchAgain.jpg" alt="tweet" />
        </div >
    }


    /////// FEB 21  ///////////////////

    if (image === "feb21_privilege.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/ihatejoelkim/status/1364679372897017860", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/feb21/feb21_privilege.jpg" alt="tweet" />
        </div >
    }


    if (image === "feb21_lockdown.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/JuIia_Caesar/status/1365424314787520516", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/feb21/feb21_lockdown.jpg" alt="tweet" />
        </div >
    }


    if (image === "feb21_yearWeek.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/betchesluvthis/status/1359984764896305153", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/feb21/feb21_yearWeek.jpg" alt="tweet" />
        </div >
    }

    if (image === "feb21_adam.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://www.instagram.com/p/CLNBZBjhcnc/", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/feb21/feb21_adam.jpg" alt="tweet" />
        </div>
    }


    if (image === "feb21_emoji") {
        const title = "The Syringe Emoji Is Getting a More Accurate Update for the COVID-19 Age"
        const text = `Apple shared a vaccine-friendly new update to the syringe emoji. The updated design does not contain blood, which makes it more versatile and accurate in the context of vaccines.`
        const link = "https://www.self.com/story/syringe-emoji-update"
        const source = "SELF"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >

    }


    if (image === "feb21_prepandemic.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/emilyfavreau/status/1365714142842155008", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/feb21/feb21_prepandemic.jpg" alt="tweet" />
        </div >
    }


    if (image === "feb21_yearOff.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/elizabday/status/1361278713875300352", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/feb21/feb21_yearOff.jpg" alt="tweet" />
        </div>
    }


    if (image === "feb21_airport.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/rebexxxxa/status/1363863621630103555", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/feb21/feb21_airport.jpg" alt="tweet" />
        </div >
    }


    if (image === "feb21_astrology") {
        const title = "Obsessed With Astrology Lately? TikTok — & COVID — May Be The Reason Why"
        const text = `(...) as we inch toward the one-year anniversary of the pandemic, our traditional ways of connecting and being seen are still unavailable to most — but the stars are always there, waiting for us to find ourselves in them.`
        const link = "https://www.refinery29.com/en-us/astrology-birth-chart-identity-obsession"
        const source = "Refinery29"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div>
    }

    if (image === "feb21_therapist.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/alexdrag_/status/1362514588730871812", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/feb21/feb21_therapist.jpg" alt="tweet" />
        </div >
    }


    if (image === "feb21_zoom.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/celestelabedz/status/1363883115492511753", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/feb21/feb21_zoom.jpg" alt="tweet" />
        </div >
    }





    if (image === "feb21_videoPerception") {
        media = <div className="modalContainer modalRight">
            <iframe title="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/DHekkhLGjAc?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    }


    if (image === "feb21_valentine.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/caittnb/status/1358760733060853760", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/feb21/feb21_valentine.jpg" alt="tweet" />
        </div >
    }


    if (image === "feb21_lotto.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://www.instagram.com/p/CKu2oqxh8lU/", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/feb21/feb21_lotto.jpg" alt="tweet" />
        </div >
    }

    if (image === "feb21_zoomVideo") {
        media = <div className="modalContainer modalRight">
            <iframe title="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/lGOofzZOyl8?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div >
    }


    if (image === "feb21_datingBio") {
        const title = "People Are Touting Their Covid Vaccines in Their Tinder Bios"
        const text = `Since the first Covid-19 vaccine doses were given in December, the number of people across the country mentioning the words “vaccine” or “vaccinated” in their Bumble profiles has steadily increased`
        const link = "https://www.washingtonian.com/2021/02/09/people-washingtonians-promoting-their-covid-vaccine-on-dating-apps-tinder-hinge-bumble/"
        const source = "The Washingtonian"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div>
    }

    /////// JAN 21  ///////////////////


    if (image === 'jan21_twitter.jpg') {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://twitter.com/Twitter/status/1345021162959503360", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/jan21/jan21_twitter.jpg" alt="tweet" />
        </div >
    }

    if (image === "jan21_saturdays.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://twitter.com/matthaig1/status/1348047814228664327", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/jan21/jan21_saturdays.jpg" alt="tweet" />
        </div >
    }


    if (image === "jan21_postCovid.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://www.instagram.com/p/CJqjeFCAuri/", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/jan21/jan21_postCovid.jpg" alt="tweet" />
        </div >
    }


    if (image === "jan21_precaution.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://twitter.com/bocxtop/status/1344827257152532481", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/jan21/jan21_precaution.jpg" alt="tweet" />
        </div >
    }

    if (image === "jan21_emails.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open('https://twitter.com/stephstephking/status/1349518882172788736', '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/jan21/jan21_emails.jpg" alt="tweet" />
        </div >
    }

    if (image === "jan21_financialTimes") {
        const title = "Alone together: friendship in a pandemic"
        const text = `The pandemic has encouraged reflection. We have turned inwards: stuck inside, and in our heads. With forced isolation, for some it has been a time to take stock. All the while, friends have been kept at a distance.`
        const link = "https://www.ft.com/content/16f8495e-ca5e-4c47-add6-b69bf1b2fe36"
        const source = "The Financial Times"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >
    }


    if (image === "jan21_pandemic_bday.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://twitter.com/KirstenKing_/status/1348407218241093633", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/jan21/jan21_pandemic_bday.jpg" alt="tweet" />
        </div>
    }

    if (image === "jan21_bday.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://twitter.com/TomDavidson09/status/1347833443988725760", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/jan21/jan21_bday.jpg" alt="tweet" />
        </div>
    }

    if (image === 'jan21_wired') {
        const title = "We asked coronavirus experts what summer 2021 will be like"
        const text = `With festivals cancelled, flights grounded and some social distancing likely still in place, this summer will be far from normal.`
        const link = "https://www.wired.co.uk/article/summer-plans-coronavirus-experts"
        const source = "The Wired"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >
    }

    if (image === 'jan21_id') {
        const title = "One in five bosses are spying on us while we WFH"
        const text = `WFH has become less of a novelty and more of a way of life for millions of people around the world.`
        const link = "https://i-d.vice.com/en_uk/article/3anjev/work-from-home-spyware-surveillance-boss"
        const source = "ID Magazine"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >
    }

    if (image === "jan21_adamjk.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://www.instagram.com/p/B7tU2eHlnJy/", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/jan21/jan21_adamjk.jpg" alt="tweet" />
        </div >
    }


    if (image === "jan21_freeTrial.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://twitter.com/wesleybonner/status/1347254343456718854", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/jan21/jan21_freeTrial.jpg" alt="tweet" />
        </div >
    }


    if (image === "jan21_vice") {
        const title = "I Gave My Family Coronavirus and Now They’re Not Speaking to Me"
        const text = `2020 came around and gave us an entirely new problem to deal with: the everyday fear of killing your own family with COVID-19.`
        const link = "https://www.vice.com/en/article/m7a7za/how-it-feels-infect-family-members-coronavirus"
        const source = "VICE"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >
    }


    if (image === "jan21_goodPoint") {
        media = <div className="modalContainer modalRight auto">
            <ReactPlayer url="https://soundcloud.com/goodpoint/2020-year-in-review" playing={true} height="150px" width="500px" />
        </div>
    }



    if (image === "jan21_budget.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://twitter.com/betchesluvthis/status/1353360657350012928", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/jan21/jan21_budget.jpg" alt="tweet" />
        </div >
    }



    /////// DEC 20  ///////////////////

    if (image === "dec20_standard.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://twitter.com/SaadOmer3/status/1334528902459494410", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/dec20/dec20_standard.jpg" alt="tweet" />
        </div>
    }

    if (image === "dec20_theVerge") {
        const title = "The Pandemic Ruined Time"
        const text = `The calendar for 2020 is made up of uniform blocks, but that’s not what
        my mental map of the year looks like.`
        const link = "https://www.theverge.com/2020/12/15/22167586/pandemic-time-perception-2020-covid"
        const source = "The Verge"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >

    }


    if (image === "dec20_months.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://twitter.com/adnannhussainn/status/1333565175417409538", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/dec20/dec20_months.jpg" alt="tweet" />
        </div>
    }


    if (image === "dec20_negativity.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://twitter.com/theog_dc/status/1344425694848315392", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/dec20/dec20_negativity.jpg" alt="tweet" />
        </div >
    }


    if (image === "dec20_break.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://twitter.com/ElyKreimendahl/status/1344708468121468933", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/dec20/dec20_break.jpg" alt="tweet" />
        </div>
    }


    if (image === "dec20_voyage.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://twitter.com/alexnazaryan/status/1336477608301703168", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/dec20/dec20_voyage.jpg" alt="tweet" />
        </div >
    }


    if (image === "dec20_guardian") {
        const title = "Covid has shown me what lies beyond boredom: post-boredom"
        const text = `I have already started practising my small talk for Christmas. “Good, thanks. You?” I keep saying into a mirror, fully aware that in the past eight months I have more or less completely lost the ability to make conversation with humans. “What did I do with the time? Wow, the year has gone so quickly, hasn’t it?”`
        const link = "https://www.theguardian.com/commentisfree/2020/dec/02/covid-boredom-lockdown"
        const source = "The Guardian"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div>
    }

    if (image === "dec20_detox.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://twitter.com/_Stevensonjean/status/1334736242391527424", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/dec20/dec20_detox.jpg" alt="tweet" />
        </div>
    }

    if (image === "dec20_mustache.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://twitter.com/bigsharkguy/status/1344728571902877696", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/dec20/dec20_mustache.jpg" alt="tweet" />
        </div >
    }


    if (image === "dec20_cards.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://twitter.com/DaddingAround/status/1338185060105789443", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/dec20/dec20_cards.jpg" alt="tweet" />
        </div>
    }


    if (image === "dec20_word") {
        const title = "Guess what! 2020’s word of the year is here, and it’s depressing!"
        const text = `Merriam-Webster and Dictionary.com have dropped their 2020 Word of the Year, and it is, wait for it… “pandemic”. `
        const link = "https://i-d.vice.com/en_uk/article/v7mba4/2020-word-of-the-year-merriam-webster-dictionary-dot-com-pandemic"
        const source = "ID Magazine"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >
    }


    if (image === "dec20_plans.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://twitter.com/PetrickSara/status/1336775369790251010", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/dec20/dec20_plans.jpg" alt="tweet" />
        </div>

    }





    if (image === "dec20_time") {
        const title = "A Post-Pandemic Bucket List (and What To Do In the Meantime)"
        const text = `Oh, the things we’ll do when the vaccines are distributed and the pandemic is over!`
        const link = "https://time.com/5918335/a-post-pandemic-bucket-list-and-what-to-do-in-the-meantime/"
        const source = "Time"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >
    }

    if (image === "dec20_newAge.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://www.instagram.com/p/CJd2XQ8ox3W/", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/dec20/dec20_newAge.jpg" alt="tweet" />
        </div>
    }


    if (image === "dec20_wentlike.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://twitter.com/shavoawesome/status/1333763116631429120", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/dec20/dec20_wentlike.jpg" alt="tweet" />
        </div>
    }



    /////// NOV 20  ///////////////////


    if (image === "vice_nostalgia") {
        const title = "The Pandemic Is Making Us All Suckers for Nostalgia"
        const text = `During a time when no one knows what the hell is going on, turning to familiar TV shows and movies helps.`
        const link = "https://www.vice.com/en/article/jgqmn8/nostalgia-pandemic-coronavirus-childhood-movies-tv-video-games"
        const source = "VICE"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >
    }


    if (image === "nov20_third.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://twitter.com/sarahclazarus/status/1324382795787952133", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/nov20/nov20_third.jpg" alt="tweet" />
        </div>
    }



    if (image === "nov20_adamjk.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://www.instagram.com/p/CHgF-F8F5Ku/?utm_source=ig_embed", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/nov20/nov20_adamjk.jpg" alt="tweet" />
        </div>
    }


    if (image === "nov20_blur.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://twitter.com/wahabmalik_/status/1333440617028997121", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/nov20/nov20_blur.jpg" alt="tweet" />
        </div>
    }


    if (image === "nov20_resolutions.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://twitter.com/alyssalimp/status/1328577659878731789", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/nov20/nov20_resolutions.jpg" alt="tweet" />
        </div>
    }




    if (image === "nov20_card.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://twitter.com/DaddysinCharge/status/1329883389290278918", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/nov20/nov20_card.jpg" alt="tweet" />
        </div>
    }

    if (image === "nov20_agree.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://twitter.com/taylortrudon/status/1328417718534627328", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/nov20/nov20_agree.jpg" alt="tweet" />
        </div>
    }


    if (image === "nov20_vacation.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://twitter.com/theguaca_molly/status/1328902090408816645", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/nov20/nov20_vacation.jpg" alt="tweet" />
        </div>
    }


    if (image === "nov20_hinge.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://twitter.com/akilahgreen/status/1329633760275402752", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/nov20/nov20_hinge.jpg" alt="tweet" />
        </div>
    }


    if (image === "nov20_quarantineAlone") {
        const title = "I've Been Quarantining Alone for the Past 7 Months—Here's What I've Learned"
        const text = `I'm going to say something that you've probably heard over and over, so forgive me for being repetitive. It's been a long year.`
        const link = "https://thethirty.whowhatwear.com/what-i-learned-during-quarantine/slide5"
        const source = "The Thirty"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >
    }





    if (image === "nov20_zoom.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://twitter.com/eff_yeah_steph/status/1327445146808377346", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/nov20/nov20_zoom.jpg" alt="tweet" />
        </div>
    }


    if (image === "nov20_mcarey.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://twitter.com/andizeisler/status/1328143281943842816", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/nov20/nov20_mcarey.jpg" alt="tweet" />
        </div>
    }


    if (image === "outside_vice") {
        const title = "When Does 'Outside' Become Inside?"
        const text = `As rules around dining shift rapidly, it's unclear if restaurants can reach a comfortable and COVID-safe definition of "outdoors."`
        const link = "https://www.vice.com/en/article/jgqpn7/when-does-outdoor-dining-become-indoor-dining-we-asked-experts"
        const source = "VICE"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >
    }



    if (image === "nov20_dayoff.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://twitter.com/ramblinma/status/1328505317051691008", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/nov20/nov20_dayoff.jpg" alt="tweet" />
        </div>
    }

    /////// OCT 20  ///////////////////

    if (image === "oct20_learn.jpg") {
        media = <div className="modalContainer modalLeft auto">

            <img onClick={() => window.open("https://www.instagram.com/p/CGLgl0Hg0zX/", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/oct20/oct20_learn.jpg" alt="tweet" />

        </div >

    }

    if (image === "oct20_tears.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://twitter.com/leticia__sala/status/1318991908220305409", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/oct20/oct20_tears.jpg" alt="tweet" />
        </div>

    }



    if (image === "oct20_podcast") {
        media = <div className="modalContainer modalRight auto">
            <iframe autoPlay={true} title="takeaway podcast" frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1061961/&share=1"></iframe>
        </div>

    }

    if (image === "oct20_kim.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://twitter.com/KimKardashian/status/1321151192165134344", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/oct20/oct20_kim.jpg" alt="tweet" />
        </div>
    }



    if (image === 'oct20_confusingTime') {
        media = <div className="modalContainer modalRight">
            <iframe title="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/V-XQUXAlbcM?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

    }



    if (image === "oct20_kanye.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://twitter.com/kanyewest/status/1312413216652226560", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/oct20/oct20_kanye.jpg" alt="tweet" />
        </div>
    }





    if (image === "oct20_washington_article") {
        const title = "What day is it? - Newsletter"
        const text = `A seven-day email series to help you recover your sense of time and redefine your week.`
        const link = "https://www.washingtonpost.com/gdpr-consent/?next_url=https%3a%2f%2fwww.washingtonpost.com%2flifestyle%2f2020%2f10%2f14%2fwhat-day-is-it-newsletter-sign-up%2f"
        const source = "The Washington Post"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >
    }


    if (image === "oct20_spreader.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://twitter.com/addieyomind/status/1321666449195339776", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/oct20/oct20_spreader.jpg" alt="tweet" />
        </div>
    }


    if (image === "oct20_vanityFair") {
        const title = "The Forgotten F-Word in the Pandemic"
        const text = `Monica Lewinsky wonders if these times demand a prominent mental health czar.`
        const link = "https://www.vanityfair.com/news/2020/09/monica-lewinsky-on-covid-mental-health-czar"
        const source = "Vanity Fair"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >
    }




    if (image === "oct20_mentalHealth") {
        const title = "Useful tips to aid your mental health during a pandemic"
        const text = `Oh and listen to some ambient sounds, everyone loves that shit.`
        const link = "https://www.instagram.com/p/CGK2uf5ArPy/"
        const source = "ID Magazine's Instagram account"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div>
    }




    if (image === "oct20_bday.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://www.instagram.com/p/CGrzQKsHaV-", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/oct20/oct20_bday.jpg" alt="tweet" />
        </div>
    }



    if (image === "oct20_costume.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://twitter.com/gfishandnuggets/status/1318358839704649730", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/oct20/oct20_costume.jpg" alt="tweet" />
        </div>
    }



    if (image === "oct20_bday.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://www.instagram.com/p/CGrzQKsHaV-", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/oct20/oct20_bday.jpg" alt="tweet" />
        </div>
    }

    if (image === "oct20_masks.jpg") {
        media = <div className="modalContainer modalRight auto">
            <img onClick={() => window.open("https://www.instagram.com/p/CF2HUJ4Hxjb", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/oct20/oct20_masks.jpg" alt="tweet" />
        </div>
    }


    if (image === "oct20_vice_cuffing") {
        const title = "The A to Z of Coronavirus Cuffing Season"
        const text = `A handy guide to navigating the most chaotic time of year during the most chaotic year on record.`
        const link = "https://www.vice.com/en/article/y3gm4w/the-a-to-z-of-coronavirus-cuffing-season"
        const source = "VICE"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div>
    }


    if (image === "oct20_tomb.jpg") {
        media = <div className="modalContainer modalRight auto">

            <img onClick={() => window.open("https://twitter.com/RodLacroix/status/1313134300758446084", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/oct20/oct20_tomb.jpg" alt="tweet" />

        </div >

    }



    if (image === "oct20_cancel.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://twitter.com/thearibradford/status/1313843025462792192", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/oct20/oct20_cancel.jpg" alt="tweet" />
        </div>

    }



    /////// SEPT 20  ///////////////////

    if (image === "sept20_postWashington") {
        const title = "It's been six months: our sense of time is still broken"
        const text = `Six months since our internal clocks broke and started blinking zeros. The first week felt like a month. The last month felt like a week.`
        const link = "https://www.washingtonpost.com/lifestyle/style/its-been-six-months-our-sense-of-time-is-still-broken/2020/09/10/1f6a5442-6dc7-11ea-a3ec-70d7479d83f0_story.html"
        const source = "The Washington Post"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >

    }


    if (image === "sept20_dress.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/DameTosin/status/1301607144618438656", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/sept20/sept20_dress.jpg" alt="tweet" />
        </div>
    }

    if (image === "sept20_bday.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/holladay_man/status/1304976221344878597", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/sept20/sept20_bday.jpg" alt="tweet" />
        </div>
    }

    if (image === "sept20_videoVox") {
        media = <div className="modalContainer modalRight">
            <iframe title="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/-S_f-huz-EU?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div >
    }

    if (image === "sept20_store.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/sarahclazarus/status/1308094977189134336", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/sept20/sept20_store.jpg" alt="tweet" />
        </div>
    }

    if (image === "sept20_husband.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/supergrrl7/status/1305482451641339905", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/sept20/sept20_husband.jpg" alt="tweet" />
        </div>
    }

    if (image === "sept20_id_zoom") {
        const title = "I would be very happy to not do a zoom call ever again"
        const text = `It was definitely a challenge, everything takes a lot longer. I find it hard to feel so connected when everything is over video calls… `
        const link = "https://i-d.vice.com/en_uk/article/jgxzb7/molly-goddard-ugg-collaboration-interview"
        const source = "ID Magazine"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >
    }

    if (image === "sept20_halloween.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/wendy_b/status/1304110247376637952", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/sept20/sept20_halloween.jpg" alt="tweet" />
        </div>
    }


    if (image === "sept20_precovid.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/_gumshudaa/status/1305639970946854912", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/sept20/sept20_precovid.jpg" alt="tweet" />
        </div>
    }

    if (image === "sept20_happy.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/annetdonahue/status/1301527708107771904", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/sept20/sept20_happy.jpg" alt="tweet" />
        </div>
    }


    if (image === "sept20_dict") {
        const title = "Blursday"
        const text = `When you’ve been sheltering in place for so long because of a global pandemic you have no idea what day it is as they all blur together.`
        const link = "https://www.urbandictionary.com/define.php?term=blursday"
        const source = "The Urban Dictionary"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >
    }


    if (image === "sept20_outside.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/97Vercetti/status/1310380020964167680", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/sept20/sept20_ouside.jpg" alt="tweet" />
        </div>
    }

    if (image === "sept20_expire.jpg") {
        media = <div className="modalContainer modalLeft auto">
            <img onClick={() => window.open("https://twitter.com/RJXXVI/status/1301292916221059072", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/sept20/sept20_expire.jpg" alt="tweet" />
        </div>
    }

    if (image === "sept20_viceTravel") {
        const title = "COVID Cancelled My Vacation So I ‘Travelled’ From Home"
        const text = `With a few clicks, you can become an explorer. There’s no need for bookings, travel stress, or jet lag.`
        const link = "https://www.vice.com/en/article/m7jzpy/virtual-travel-sri-lanka-home-google-earth-coronavirus-pandemic-cancellations"
        const source = "VICE"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >
    }

    /////// AUG 20  ///////////////////

    if (image === "aug20_bdayMonth.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/JenniKonner/status/1291925841438359552", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/aug20/aug20_bdayMonth.jpg" alt="tweet" />
        </div >

    }

    if (image === "aug20_articleWired") {
        const title = "There Are No Hours or Days in Coronatime"
        const text = `Our experience of time isn’t just different because we are fearful or bored (...) It has changed because we don’t yet know what to measure it against.
    Coronatime has no scale.`
        const link = "https://www.wired.com/story/coronavirus-time-warp-what-day-is-it/"
        const source = "The Wire"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >
    }


    if (image === "aug20_ads.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/rgay/status/1290915028699189249", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/aug20/aug20_ads.jpg" alt="tweet" />
        </div >

    }


    if (image === "aug20_pubMed") {
        const title = "Coronavirus, Ageism, and Twitter"
        const text = `Almost one-quarter of analyzed tweets had ageist or potentially offensive content toward older adults.`
        const link = "https://pubmed.ncbi.nlm.nih.gov/32338787/"
        const source = "PubMed"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div>
    }



    if (image === "aug20_teachers.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/NicholasFerroni/status/1292511365802921984", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/aug20/aug20_teachers.jpg" alt="tweet" />
        </div>
    }



    if (image === "aug20_zoomParties.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/alicegoldfuss/status/1294423279923412992", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/aug20/aug20_zoomParties.jpg" alt="tweet" />
        </div >

    }



    if (image === "aug20_clothed.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/betchesluvthis/status/1295807167472242688", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/aug20/aug20_clothed.jpg" alt="tweet" />
        </div>
    }


    if (image === "aug20_videoGame") {
        media = <div className="modalContainer modalRight">
            <iframe title="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/_QVzddwAizU?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    }




    if (image === "aug20_play.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/samlymatters/status/1296879541189738497", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/aug20/aug20_play.jpg" alt="tweet" />
        </div>
    }

    if (image === "aug20_child.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/feliciaday/status/1299164009107603456", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/aug20/aug20_child.jpg" alt="tweet" />
        </div >
    }


    if (image === "aug20_icecream.jpg") {
        media = <div className="modalContainer modalLeft">
            <img alt="tweet" onClick={() => window.open("https://twitter.com/MaraWilson/status/1291557912645517316", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/aug20/aug20_icecream.jpg" />
        </div >
    }


    if (image === "aug20_sanitizer.jpg") {
        media = <div className="modalContainer modalRight">

            <img onClick={() => window.open("https://twitter.com/lexniko/status/1298431448609779712", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/aug20/aug20_sanitizer.jpg" alt="tweet" />

        </div >
    }

    if (image === "aug20_videoSAT") {
        media = <div className="modalContainer modalLeft">
            <iframe title="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/FDL4M4iHlls?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    }


    if (image === "aug20_zoomFriends.jpg") {
        media = <div className="modalContainer modalRight">

            <img onClick={() => window.open("https://twitter.com/LizHackett/status/1292900992623640576", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/aug20/aug20_zoomFriends.jpg" alt="tweet" />

        </div >
    }


    /////// JULY 20  ///////////////////

    if (image === "july20_reuters") {
        const title = "Why time feels so weird in 2020"
        const text = `Some days seem to pass very slowly while some weeks, and even months, fly by. A set of simple perception tests illustrate some factors that can distort our sense of time.`
        const link = "https://graphics.reuters.com/HEALTH-CORONAVIRUS/TIME/gjnvwwjegvw/"
        const source = "Reuters"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >

    }

    if (image === "july20_pass.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/dearra/status/1285015802387877888", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/july20/july20_pass.jpg" alt="tweet" />
        </div >
    }

    if (image === "july20_sad.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/leticia__sala/status/1286719258408386561", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/july20/july20_sad.jpg" alt="tweet" />
        </div >
    }

    if (image === "july20_id") {
        const title = "How coronavirus has impacted youth mental health"
        const text = `Staying stuck at home for weeks on end, unable to see friends and loved ones, dealing with financial worries and the ever-present threat of a deadly illness has taken its toll, with rates of anxiety and depression increasing, particularly among young people.`
        const link = "https://i-d.vice.com/en_uk/article/z3eyqe/coronavirus-young-people-mental-health-effects-study-ucl"
        const source = "ID Magazine"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >
    }


    if (image === "july20_cake.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://www.instagram.com/p/CCqYS46HCDu/", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/july20/july20_cake.jpg" alt="tweet" />
        </div >
    }


    if (image === "july20_introvert.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/SerahChaCha/status/1284879702524678144", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/july20/july20_introvert.jpg" alt="tweet" />
        </div >
    }


    if (image === "july20_vice") {
        const title = "21 Non-Boring (And Safe) Ways to See Friends in Person This Summer"
        const text = `13. Have a teenage burnout–themed hang in a parking lot. Shotgun beers. Talk about "getting out of this town and seeing the world," which is actually a pretty apt topic for this moment in time.`
        const link = "https://www.vice.com/en/article/akznq4/creative-safe-socially-distanced-ways-to-see-friends-coronavirus-pandemic"
        const source = "VICE"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div>
    }


    if (image === "july20_vox") {
        media = <div className="modalContainer modalRight">
            <iframe title="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/qp5CEcIyk94?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    }


    if (image === "july20_bday.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/sarcasticmommy4/status/1278694466031726593", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/july20/july20_bday.jpg" alt="tweet" />
        </div >
    }

    if (image === "july20_summerMood.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/iamlisako/status/1279866554885320706", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/july20/july20_summerMood.jpg" alt="tweet" />
        </div >
    }

    if (image === "july20_missFriends.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/allisonoconor/status/1278465569336016898", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/july20/july20_missFriends.jpg" alt="tweet" />
        </div >
    }



    if (image === "july20_vividDreams") {
        const title = "Why You’re Having Such Vivid Dreams During the Pandemic"
        const text = `In general, people’s sleep patterns have shifted over the past few months (...) Graphic dreams may be with us for as long as the virus is.`
        const link = "https://time.com/5866860/pandemic-dreams-covid-19/"
        const source = "Time"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div>
    }


    if (image === "july20_touchSkin") {
        const title = "If I Can’t Touch Another Human, at Least I Can Watch It on TV"
        const text = `Romantic scenes are now my "touch porn," allowing me to imagine the warmth of human contact again.`
        const link = "https://www.vice.com/en/article/pkymd9/if-i-cant-touch-another-human-at-least-i-can-watch-it-on-tv"
        const source = "Vice"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div>
    }


    if (image === "july20_school.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/TylerGildin/status/1281224994379436032", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/july20/july20_school.jpg" alt="tweet" />
        </div >
    }

    if (image === "july20_marchCrazy.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/betchesluvthis/status/1280201442222096387", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/july20/july20_marchCrazy.jpg" alt="tweet" />
        </div >
    }


    /////// JUNE 20  ///////////////////

    if (image === "june20_cancelled.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/aparnapkin/status/1275249174292783104", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/june20/june20_cancelled.jpg" alt="tweet" />
        </div >
    }

    if (image === "june20_humanExp.jpg") {
        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://www.instagram.com/p/CB5yywSpyWu/", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/june20/june20_humanExp.jpg" alt="tweet" />
        </div >

    }

    if (image === "june20_diary.jpg") {
        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/LizHackett/status/1272620747790233600", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/june20/june20_diary.jpg" alt="tweet" />
        </div >

    }


    if (image === "june20_wired") {

        const title = "If the Virus Slows This Summer, It May Be Time to Worry"
        const text = `We hoped that Covid-19 would be a seasonal infection. We hoped wrong.`
        const link = "https://www.wired.com/story/if-the-coronavirus-slows-this-summer-it-may-be-time-to-worry/"
        const source = "The Wired"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div>

    }


    if (image === "june20_6months.jpg") {

        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/RichardsonLewis/status/1270454092897411073", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/june20/june20_6months.jpg" alt="tweet" />
        </div >

    }



    if (image === "june20_bbc") {

        const title = "Coronavirus: I want to meet five friends. How can I stay safe?"
        const text = `But even as lockdowns are lifted, without a vaccine - which is likely still a year away - the risk remains.`
        const link = "https://www.bbc.com/news/world-us-canada-52844080"
        const source = "BBC News"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div>
    }


    if (image === "june20_routine.jpg") {

        media = <div className="modalContainer modalLeft">
            <img onClick={() => window.open("https://twitter.com/lexniko/status/1275106117564149767", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/june20/june20_routine.jpg" alt="tweet" />
        </div >

    }


    if (image === "june20_spoilers.jpg") {

        media = <div className="modalContainer modalRight">


            <img onClick={() => window.open("https://twitter.com/zandashe/status/1271612858502168576", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/june20/june20_spoilers.jpg" alt="tweet" />
        </div >

    }


    if (image === "june20_zoom.jpg") {

        media = <div className="modalContainer modalLeft">


            <img onClick={() => window.open("https://twitter.com/AksharPathak/status/1273110287760216073", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/june20/june20_zoom.jpg" alt="tweet" />
        </div >

    }


    if (image === "june20_grocery.jpg") {

        media = <div className="modalContainer modalRight">


            <img onClick={() => window.open("https://twitter.com/RodLacroix/status/1277256643231846406", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/june20/june20_grocery.jpg" alt="tweet" />
        </div >

    }



    if (image === "june20_history.jpg") {

        media = <div className="modalContainer modalLeft">


            <img onClick={() => window.open("https://twitter.com/diggymoreland/status/1267470964633120771", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/june20/june20_history.jpg" alt="tweet" />
        </div >

    }


    if (image === "june20_ipsos") {
        const title = "Summer 2020 in the shadow of COVID-19"
        const text = `Do people have plans for the Summer? for 43%, "no, due to COVID"`
        const link = "https://www.ipsos.com/en/summer-2020-shadow-covid-19"
        const source = "IPSOS"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div>

    }


    if (image === "june20_worse.jpg") {

        media = <div className="modalContainer modalLeft">


            <img onClick={() => window.open("https://twitter.com/ZackBornstein/status/1272250467616034816", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/june20/june20_worse.jpg" alt="tweet" />
        </div >

    }


    if (image === "june20_introverts.jpg") {

        media = <div className="modalContainer modalRight">


            <img onClick={() => window.open("https://twitter.com/GHardstark/status/1276266642121474048", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/june20/june20_introverts.jpg" alt="tweet" />
        </div >

    }




    if (image === "june20_smile.jpg") {

        media = <div className="modalContainer modalLeft">


            <img onClick={() => window.open("https://twitter.com/annetdonahue/status/1275779689970388997", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/june20/june20_smile.jpg" alt="tweet" />
        </div >

    }


    if (image === "june20_police.jpg") {

        media = <div className="modalContainer modalRight">


            <img onClick={() => window.open("https://twitter.com/asmaresists/status/1269336348630102018", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/june20/june20_police.jpg" alt="tweet" />
        </div >

    }



    /////// MAY 20  ///////////////////


    if (image === "may20_therapy.jpg") {

        media = <div className="modalContainer modalLeft">

            <img onClick={() => window.open("https://twitter.com/hels/status/1260387479003312129?lang=en", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/may20/may20_therapy.jpg" alt="tweet" />
        </div >

    }




    if (image === "may20_laTimes") {

        const title = "Does it feel like time is flying by during coronavirus quarantine"
        const text = `Our altered perspective of time can be useful during quarantine. Normally, when we’re bored, we have a plethora of options in front of us (...) Now, we’re being challenged`
        const link = "https://www.latimes.com/lifestyle/story/2020-05-01/does-it-feel-like-like-time-is-flying-by-during-coronavirus-quarantine-heres-why"
        const source = "LA Times"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />

        </div >

    }


    if (image === "may20_sanitizer.jpg") {

        media = <div className="modalContainer modalLeft">

            <img onClick={() => window.open("https://twitter.com/ihatejoelkim/status/1256620943851417601", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/may20/may20_sanitizer.jpg" alt="tweet" />
        </div >

    }


    if (image === "may20_birdApp.jpg") {

        media = <div className="modalContainer modalRight">

            <img onClick={() => window.open("https://twitter.com/vickjulie/status/1260934885302128641", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/may20/may20_birdApp.jpg" alt="tweet" />
        </div >

    }


    if (image === "may20_eating.jpg") {

        media = <div className="modalContainer modalLeft">

            <img onClick={() => window.open("https://twitter.com/annetdonahue/status/1265307899699609602", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/may20/may20_eating.jpg" alt="tweet" />
        </div >

    }


    if (image === "may20_timeTricks") {
        media = <div className="modalContainer modalRight">
            <iframe title="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/PPI0YBeW5Kk?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    }



    if (image === "may20_guardian") {
        const title = "Why is good to be bored"
        const text = `Lockdown has been a boon for boredom – but is that a bad thing?`
        const link = "https://www.theguardian.com/global/2020/may/03/why-its-good-to-be-bored"
        const source = "The Guardian"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div>
    }


    if (image === "may20_clothMask.jpg") {

        media = <div className="modalContainer modalRight">

            <img onClick={() => window.open("https://twitter.com/disco_infern0/status/1260979088682037248", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/may20/may20_clothMask.jpg" alt="tweet" />
        </div >

    }


    if (image === "may20_zara.jpg") {

        media = <div className="modalContainer modalLeft">

            <img onClick={() => window.open("https://twitter.com/lucyontheg/status/1258042019466919936", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/may20/may20_zara.jpg" alt="tweet" />
        </div >

    }


    if (image === "may20_bill.jpg") {

        media = <div className="modalContainer modalRight">

            <img onClick={() => window.open("https://twitter.com/FatherWithTwins/status/1261069566907539456", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/may20/may20_bill.jpg" alt="tweet" />
        </div >

    }




    if (image === "may20_fakeNews") {

        const title = "Coronavirus: Twitter will label Covid-19 fake news"
        const text = `Twitter has started putting warning messages on tweets containing misleading information about Covid-19.
        And it confirmed US President Donald Trump, who has previously suggested injecting disinfectants could help cure coronavirus, would be subject to the new rules.`
        const link = "https://www.bbc.com/news/technology-52632909"
        const source = "BBC News"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />

        </div >

    }




    if (image === "may20_couplesId") {

        const title = "How couples around the world are dealing with quarantine"
        const text = `For couples who live together, or who've decided to spend lockdown together, this has meant countless hours (for better or for worse) in each other's company`
        const link = "https://i-d.vice.com/en_uk/article/4ayyxp/how-couples-around-the-world-are-dealing-with-quarantine-together-and-apart"
        const source = "ID Magazine"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />

        </div >

    }


    if (image === "may20_insiderArticle") {

        const title = "20 people share the most important thing they've learned about themselves in quarantine"
        const text = `With much of the world under lockdown orders, many people — especially those who live by themselves — are getting more time alone with their thoughts than they may be used to.`
        const link = "https://www.insider.com/people-share-what-theyve-learned-about-themselves-in-quarantine-2020-4"
        const source = "Insider"

        media = <div className="modalContainer modalLeft auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />

        </div >

    }



    if (image === "may20_room.jpg") {

        media = <div className="modalContainer modalRight">
            <img onClick={() => window.open("https://twitter.com/alyssalimp/status/1263294197378891778", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/may20/may20_room.jpg" alt="tweet" />
        </div >

    }




    /////// APRIL 20  ///////////////////

    if (image === "april2020_Text.jpg") {
        media = <div className="modalContainer modalLeft">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/gioo_gar/status/1249097619172773888", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/april20/april2020_Text.jpg" alt="tweet" />
        </div >
    }


    if (image === "april20_quarantineCrush.jpg") {
        media = <div className="modalContainer modalRight">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/MaraWilson/status/1255286050525773825", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/april20/april20_quarantineCrush.jpg" alt="tweet" />
        </div >
    }




    if (image === "april20_intelligencer") {
        const title = "Why Coronavirus Makes February Feel Like Six-Months Ago"
        const text = `This whole time-distortion thing feels like insult atop injury: In addition to the fear and sickness and death and
        economic damage, we also have to experience this all in a sort of semi-slow-motion?`
        const link = "https://nymag.com/intelligencer/2020/04/why-coronavirus-makes-february-feel-like-six-months-ago.html"
        const source = "NY MAG"
        media = <div className="modalContainer modalLeft backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />

        </div>
    }


    if (image === "april20_pastSelf.jpg") {
        media = <div className="modalContainer modalRight">
            <iframe title="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/Ms7capx4Cb8?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div >
    }


    if (image === "april2020_facebook.jpg") {
        media = <div className="modalContainer modalLeft">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/thatkristen/status/1249867908852920325", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/april20/april2020_facebook.jpg" alt="tweet" />
        </div >
    }



    if (image === "april20_vacation.jpg") {
        media = <div className="modalContainer modalRight">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/ilazer/status/1254964615022358529", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/april20/april20_vacation.jpg" alt="tweet" />
        </div >

    }


    if (image === "april2020_bdayNephew.jpg") {
        media = <div className="modalContainer modalLeft">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/dadmann_walking/status/1249085210089709568", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/april20/april2020_bdayNephew.jpg" alt="tweet" />
        </div >

    }


    if (image === "april20_kacey.jpg") {
        media = <div className="modalContainer modalRight">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/KaceyMusgraves/status/1251360787433771011", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/april20/april20_kacey.jpg" alt="tweet" />
        </div >

    }

    if (image === "april20_pandemicsEnd.jpg") {
        media = <div className="modalContainer modalLeft">

            <iframe title="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/hA8BBJPkzC8?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div >
    }


    if (image === "april20_bored.jpg") {
        media = <div className="modalContainer modalRight">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/jazzedloon/status/1246910483132801025", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/april20/april20_bored.jpg" alt="tweet" />
        </div >

    }


    if (image === "april20_marieKondo.jpg") {
        media = <div className="modalContainer modalLeft">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/tigersgoroooar/status/1250536359489650688", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/april20/april20_marieKondo.jpg" alt="tweet" />
        </div >

    }


    if (image === "april2020_tiktok.jpg") {
        media = <div className="modalContainer modalRight">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/g0nefisching/status/1252291666565902340", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/april20/april2020_tiktok.jpg" alt="tweet" />
        </div >

    }


    if (image === "april20_timeCapsule") {
        media = <div className="modalContainer modalLeft">

            <iframe title="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/LHppazBVMrw?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div >
    }



    if (image === "april2020_bdayZoom.jpg") {
        media = <div className="modalContainer modalRight">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/curlycomedy/status/1248802199557279745", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/april20/april2020_bdayZoom.jpg" alt="tweet" />
        </div >

    }



    if (image === "april20_quarantineIG.jpg") {
        media = <div className="modalContainer modalRight">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/storiesofamom/status/1254424250989129728", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/april20/april20_quarantineIG.jpg" alt="tweet" />
        </div>

    }


    /////// MARCH 20  ///////////////////

    if (image === "march20_astrology.jpg") {
        media = <div className="modalContainer modalLeft">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/chaninicholas/status/1244755112750284806", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march20/march20_astrology.jpg" alt=" tweet" />
        </div >
    }

    if (image === "march20_diary.jpg") {
        media = <div className="modalContainer modalRight">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/akilahgreen/status/1240434038109638656", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march20/march20_diary.jpg" alt=" tweet" />
        </div >
    }

    if (image === "march20_time_days.jpg") {
        media = <div className="modalContainer modalLeft">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/LeBearGirdle/status/1244104652481839105", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march20/march20_time_days.jpg" alt=" tweet" />
        </div >
    }

    if (image === "march20_cbs") {
        media = <div className="modalContainer modalRight">
            <iframe title="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/oa4i9Ap6dCg?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div >

    }


    if (image === "march20_id.jpg") {
        media = <div className="modalContainer modalLeft">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://www.instagram.com/p/B9zcaespXlR", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march20/march20_id.jpg" alt=" tweet" />
        </div >
    }


    if (image === "march20_kyle.jpg") {
        media = <div className="modalContainer modalRight">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/KylePlantEmoji/status/1239309748052185089", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march20/march20_kyle.jpg" alt=" tweet" />
        </div >
    }

    if (image === "march20_growth.jpg") {
        media = <div className="modalContainer modalLeft">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/tribelaw/status/1241046759868071939", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march20/march20_growth.jpg" alt=" tweet" />
        </div >
    }


    if (image === "march20_email.jpg") {
        media = <div className="modalContainer modalLeft">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/goodbeanalt/status/1241103525956014080", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march20/march20_email.jpg" alt=" tweet" />
        </div >
    }

    if (image === "march20_texting.jpg") {
        media = <div className="modalContainer modalRight">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/chunkbardey/status/1244311223493066753", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march20/march20_texting.jpg" alt=" tweet" />
        </div >
    }

    if (image === "march20_travel.jpg") {
        media = <div className="modalContainer modalLeft">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/ABananaRambling/status/1244383328289140736", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march20/march20_travel.jpg" alt=" tweet" />
        </div >
    }


    if (image === "march20_datingText.jpg") {
        media = <div className="modalContainer modalRight">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/AliKolbert/status/1237961615540092928", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march20/march20_datingText.jpg" alt=" tweet" />
        </div >
    }


    if (image === "march20_mute.jpg") {
        media = <div className="modalContainer modalLeft">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/daniburgz/status/1244642287168049152", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march20/march20_mute.jpg" alt=" tweet" />
        </div >
    }

    if (image === "march20_quarantineTwix.jpg") {
        media = <div className="modalContainer modalRight">

            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/Michael1979/status/1238206615544872984", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march20/march20_quarantineTwix.jpg" alt=" tweet" />
        </div >
    }



    if (image === "march20_elonMusk.jpg") {
        media = <div className="modalContainer modalLeft">
            <img style={{ borderRadius: "15px" }} onClick={() => window.open("https://twitter.com/elonmusk/status/1236029449042198528", '_blank', 'noopener,noreferrer')} className="tweetImage" src="./tweets/march20/march20_elonMusk.jpg" alt=" tweet" />
        </div >

    }

    if (image === "march20_zoom") {
        const title = "We Live in Zoom Now"
        const text = `Zoom is where we work, go to school and party these days.`
        const link = "https://www.nytimes.com/2020/03/17/style/zoom-parties-coronavirus-memes.html"
        const source = "NY Times"

        media = <div className="modalContainer modalRight auto backgroundBlur">
            <ModalArticle title={title} text={text} link={link} source={source} />
        </div >

    }


    return (<>{media}</>)
}


Modal.propTypes = {
    image: PropTypes.string.isRequired
}
