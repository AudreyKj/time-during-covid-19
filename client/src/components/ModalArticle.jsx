import React from "react";
import PropTypes from 'prop-types';

export function ModalArticle({ title, text, link, source }) {
    return (
        <>
            <h1 className="titleArticleModal"> {title}</h1>

            <p className="textArticleModal" onClick={() => window.open(`${link}`, '_blank', 'noopener,noreferrer')}>
            &quot;{text}&quot; <br />
                <a className="linkModal" href={link}>
                    Read more on {source} </a> </p>
        </>
    )
}

ModalArticle.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }
