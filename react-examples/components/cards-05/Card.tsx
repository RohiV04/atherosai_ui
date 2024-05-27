import React, { useState } from 'react';
import classnames from 'classnames';
import theme from './theme';

interface ICard {
  price: number;
  title: string;
  address: string;
  description: string;
  properties: string;
  src: string;
}

const Card: React.FunctionComponent<ICard> = ({
  price,
  title,
  address,
  description,
  properties,
  src,
}: ICard) => {
  const [liked, setLiked] = useState(false);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  return (
    <article className="card">
      <div className="card__preview">
        <img src={src} alt={title} />
        <div className="card__price">{formatter.format(price)}</div>
      </div>
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__address">{address}</p>
        <p className="card__description">{description}</p>
        <div className="card__bottom">
          <div className="card__properties">{properties}</div>
          <button
            className={classnames({
              card__btn: true,
              'card__btn--like': liked,
            })}
          >
            <svg
              onClick={() => {
                setLiked(!liked);
              }}
              xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24"
              strokeWidth="2" stroke="currentColor"
              fill="none" strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 
                5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
              />
            </svg>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          body {
            display: flex;
            background: ${theme.background};
            justify-content: center;
            align-items: center;
            font-family: 'Inter', sans-serif;
            height: 100vh;
            padding: 1rem;
          }

          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }

          .card {
            background: ${theme.white};
            border-radius: 1.5rem;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px;
            display: flex;
            width: 22rem;
            height: 29rem;
            flex-direction: column;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
          }

          .card:hover {
            box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 16px;
          }

          .card__preview {
            height: 12rem;
            width: 100%;
            position: relative;
            overflow: hidden;
          }

          .card__preview img {
            width: 100%;
            height: 12rem;
            object-fit: cover;
            aspect-ratio: 16/9;
            transition: all 0.4s ease-out;
          }

          .card:hover .card__preview img {
            transform: scale(1.35);
          }

          .card__address {
            margin-top: 0.5rem;
          }

          .cards {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: center;
            margin-top: 1rem;
          }

          .card__price {
            background: ${theme.white};
            color: ${theme.text};
            z-index: 1;
            position: absolute;
            bottom: 1.25rem;
            padding: 0.25rem 0.5rem;
            border-radius: 0.5rem;
            left: 1.25rem;
            font-weight: bold;
          }

          .card__content {
            padding: 1.25rem;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            color: ${theme.text};
          }

          .card__bottom {
            margin-top: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .card__description {
            margin-top: 0.5rem;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
          }

          .card__buttons {
            display: flex;
            gap: 0.5rem;
          }

          .card__btn {
            border: none;
            background-color: transparent;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .card__btn svg {
            height: 2rem;
            width: 2rem;
            stroke: ${theme.text};
            stroke-width: 1.5px;
          }

          .card__btn--like svg {
            stroke: ${theme.like};
            fill: ${theme.like};
          }
        `}
      </style>
    </article>
  );
};

export default Card;
