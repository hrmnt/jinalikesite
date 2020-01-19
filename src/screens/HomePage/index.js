import React, { useState, useEffect } from "react";
import { Header } from "../../components";
import { iosScreen, instagram, facebook, vk } from "../../assets/images";
import "./index.css";
const HomePage = props => {
  const [title, setTitle] = useState("");

  return (
    <div className="Home-Page">
      <Header />
      <div className="main">
        <div className="container d-flex">
          <div className="w-50">
            <h1 className="title">"Jina Like" - какой то текст</h1>
            <p className="description">
              Первая казахстанская услуга по монетизации лайков. Это программа
              позволяющая оплачивать любого вида покупки или услуги за лайки из
              социальных сетей.
            </p>
          </div>
          <div className="w-50">
            <img className={"ios-screen"} src={iosScreen} />
          </div>
        </div>
      </div>
      <div className="second">
        <div className="container">
          <div className="d-flex un-line">
            <div className="col">
              <h2 className="title-h2 ">Как стать партнером?</h2>
              <p className="p2">
                Подключение заведений производится через представителя, либо на
                сайте «JINA LIKE». После установки программного обеспечения
                заведение знакомятся с публикациями пользователей и отслеживают
                списания бонусов гостями.
              </p>
              <p className="p2 mb-10">
                Партнеры «JINA LIKE» сами определяют размер получаемой скидки,
                но по умолчанию один лайк равен одному тенге. В настройках
                личного кабинета Вы можете менять курс. Изменения автоматически
                отобразятся у пользователей. При регистрации личного кабинета Вы
                можете оставить курс по умолчанию, или сделать его
                индивидуальным.
              </p>
            </div>
            <div className="col">
              <h2 className="title-h2">Наша клиентура</h2>
              <p className="p2">
                Любой активный пользователь социальных сетей.
              </p>
            </div>
            <div className="col">
              <h2 className="title-h2">В чем ваша выгода?</h2>
              <p className="p2">
                Увеличение посещаемости заведения, реклама в соцсетях,
                привлечение дополнительных клиентов и «привязка» старых.
              </p>
            </div>
          </div>
          <div className=" col more-reflect">
            {/* <div className="col"> */}
            <h2 className="title-h2">Как это работает?</h2>
            <p className="p2">
              Пользователи социальных сетей публикуют фото с хештегами о
              заведении, через программу «JINA LIKE». Получают за это лайки от
              своих подписчиков, которые в дальнейшем позволят производить
              оплату лайками в заведении или получить хорошую скидку, либо же,
              получить дополнительный приятный бонус. При условии, что заведение
              являетcя партнером «JINA LIKE».
            </p>
            <p className="p2">
              После публикации фото с хештегом, приложение «JINA LIKE»
              автоматически считывает количество лайков и отправляет в личный
              кабинет пользователя. В личном кабинете пользователь видит,
              сколько у него бонусов в отдельно взятом заведении за полученный
              лайк из социальных сетей. И может расплатиться бонусами в
              заведениях-партнёрах на кассе, предъявив индивидуальный QR-код.
              Заведение списывает бонусы пользователя, а в личном кабинете
              пользователя спишется ровно столько лайков, сколько он потратил,
              при этом использование нескольких аккаунтов в рамках одного заказа
              невозможно 1 аккаунт/1 оплата. Лайки с разных аккаунтов не
              суммируются.
            </p>
            {/* </div> */}
            {/* <div className="more-reflect-section"> */}
            {/* <h2 className="title-h2 ">Как стать партнером?</h2>
              <p className="p2">
                Подключение заведений производится через представителя, либо на
                сайте «JINA LIKE». После установки программного обеспечения
                заведение знакомятся с публикациями пользователей и отслеживают
                списания бонусов гостями.
              </p>
              <p className="p2 mb-10">
                Партнеры «JINA LIKE» сами определяют размер получаемой скидки,
                но по умолчанию один лайк равен одному тенге. В настройках
                личного кабинета Вы можете менять курс. Изменения автоматически
                отобразятся у пользователей. При регистрации личного кабинета Вы
                можете оставить курс по умолчанию, или сделать его
                индивидуальным.
              </p> */}
            <p className="title-h2">Что требуется от вас</p>
            <ul style={{ listStyle: "none", marginBottom: "40px" }}>
              <li>
                <p className="p3">- Желание стать партером "JINA LIKE"</p>
              </li>
              <li>
                <p className="p3">- Связаться с нами </p>
              </li>
              <li>
                <p className="p3">- Смартфон</p>
              </li>
              <li>
                <p className="p3">- Интернет</p>
              </li>
            </ul>
            {/* <h2 className="title-h2 mb-0">Что вам потребуется?</h2>
              <div className="d-flex"> */}
            {/* <div className="d-flex align-items-center justify-content-center mr-20">
                  <div className="dot" />
                  <p className="dots-text">Смартфон</p>
                </div>
                <div className="d-flex align-items-center justify-content-center mr-20">
                  <div className="dot" />
                  <p className="dots-text">Интернет</p>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="dot" />
                  <p className="dots-text">Интернет</p>
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="second third">
        <div className="container">
          <h2 className="title c-p mb-10">В чем плюс для заведений?</h2>
          <div className="d-flex">
            <div className="col">
              <div className="title-h2">
                <h2 className="title-h2 title-h3">Бесплатная реклама</h2>
                <div className="line" />
              </div>
              <p className="p2">
                Ваши клиенты сами рекламируют ваше заведение через соц. сети
              </p>
            </div>
            <div className="col"></div>
            <div className="col  align-items-center justify-content-center d-flex pb-0">
              <div className="d-flex pb-0">
                <img className="social-icons" src={instagram} />
                <img className="social-icons" src={facebook} />
                <img className="social-icons" src={vk} />
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="col  align-items-center justify-content-center d-flex pb-0">
              <div className="d-flex pb-0">
                <img className="social-icons" src={instagram} />
                <img className="social-icons" src={facebook} />
                <img className="social-icons" src={vk} />
              </div>
            </div>
            <div className="col"></div>
            <div className="col">
              <div className="title-h2">
                <h2 className="title-h2 title-h3">Улучшение сервиса</h2>
                <div className="line" />
              </div>
              <p className="p2">
                Объективные комментарий пользователей "JINA LIKE" позволят вам
                улучшить качество предостовляемых услуг
              </p>
            </div>
          </div>

          <div className="d-flex">
            <div className="col">
              <div className="title-h2">
                <h2 className="title-h2 title-h3">Портрет клиента</h2>
                <div className="line" />
              </div>
              <p className="p2">
               При помощи программы "JINA LIKE" вы будете ясно предстовлять свою целевую аудиторию
              </p>
            </div>
            <div className="col"></div>
            <div className="col  align-items-center justify-content-center d-flex pb-0">
              <div className="d-flex pb-0">
                <img className="social-icons" src={instagram} />
                <img className="social-icons" src={facebook} />
                <img className="social-icons" src={vk} />
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="col  align-items-center justify-content-center d-flex pb-0">
              <div className="d-flex pb-0">
                <img className="social-icons" src={instagram} />
                <img className="social-icons" src={facebook} />
                <img className="social-icons" src={vk} />
              </div>
            </div>
            <div className="col"></div>
            <div className="col">
              <div className="title-h2">
                <h2 className="title-h2 title-h3">Увелечение и расширение клентской базы</h2>
                <div className="line" />
              </div>
              <p className="p2">
                Объективные комментарий пользователей "JINA LIKE" позволят вам
                улучшить качество предостовляемых услуг
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="col">
              <div className="title-h2">
                <h2 className="title-h2 title-h3">Выгодное партнерство</h2>
                <div className="line" />
              </div>
              <p className="p2">
               Вы можете стать частью большой семьи "JINA LIKE", что позволит вам выгодно кооперироваться с другими заве  
              </p>
            </div>
            <div className="col"></div>
            <div className="col  align-items-center justify-content-center d-flex pb-0">
              <div className="d-flex pb-0">
                <img className="social-icons" src={instagram} />
                <img className="social-icons" src={facebook} />
                <img className="social-icons" src={vk} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="container">
          <h2 className="title c-p mb-10">Отправь заявку на партнерство</h2>
          <div className="d-flex">
            <form className="form">
              <div className="d-flex flex-column">
                <label>Имя</label>
                <input></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
