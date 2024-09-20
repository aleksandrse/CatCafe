import React from "react";
import "./style.css";
import Title, { TitleSize } from "/src/components/ui/title/title";
function StarCard({
  name, // имя кота
  about, // информация о коте
  feature, // особенность (ласковый, новенький и т.д.) CatFeature
  image, // URL c фото кота
  cllass, // класс для span
}) {
  return (
    <article className="star-card">
      <figure className="star-card__figure">
        <img
          className="star-card__image"
          src={image}
          width={313}
          height={320}
          alt="изображение кота"
        />
        <span className={`cat${cllass ? ` ${cllass}` : ""}`}>{feature}</span>
      </figure>
      <Title size={TitleSize.SMALL}>{name}</Title>
      <p className="star-card__text}">{about}</p>
    </article>
  );
}
export default StarCard;
