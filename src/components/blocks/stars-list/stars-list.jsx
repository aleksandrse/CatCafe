import React from "react";
import Title from "/src/components/ui/title/title";
import StarCard from "/src/components/ui/star-card/star-card";
import Button from "/src/components/ui/button/button";
import "./stars-list.css";
function StarsList({ stars }) {
  return (
    <section className="stars-list">
      {stars?.length ? (
        <>
          <Title>Наши звезды</Title>
          <ul className="star-list__list">
            {stars.map((star) => (
              <li className="star-list__item" key={star.id}>
                <StarCard {...star} />
              </li>
            ))}
          </ul>
          <Button minWidth={353} link="/buy">
            Купить билет
          </Button>
        </>
      ) : null}
    </section>
  );
}
export default StarsList;
