import React from "react";

import TeacherImage from '../../assets/images/teacher-image.png';

const Teacher = () => {
    const listQuality = [
        "Женский психолог и эксперт в области отношений",
        "Клинический психолог, гештальт-терапевт, гипнотерапевт",
        "Мастер практической психологии и технологий осознанности",
        "Коуч, тренер обучающих и трансформационных программ",
        "Мастер НЛП терапии и ДСТ (терапия диссоциированных состояний)",
        "Процессор техник РПТ, тетахилинга, субклеточной психобиологии, терапевт психохирургии и новой германской медицины",
        "Мастер метафорических карт (МАК), системно родовой терапии, технологии мгновенного исцеления, регрессивного гипноза",
        "Автор курсов по новой системной психологии, МАК, системной терапии, психохирургии, коучинга, НЛП терапии, акмеологии, курсов по женской соматике и психологии",
    ];

    return (
        <section className="teacher">
            <div className="container">
                <div className="teacher-wrapper">
                    <div className="teacher-image">
                        <img
                            src={TeacherImage}
                            alt="Жанна Абрамова"
                            className="teacher-image__image"
                        />
                    </div>
                    <div className="teacher-text">
                        <span className="subtitle teacher-text__subtitler">
                            О тренере
                        </span>

                        <h2 className="teacher-text__name">Жанна Абрамова</h2>

                        <ul className="teacher-text-ul">
                            {listQuality.map((item, index) => (
                                <li
                                    className="teacher-text-ul__li"
                                    key={`teacher-text-ul__li-${index}`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Teacher;
