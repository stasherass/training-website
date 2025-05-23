import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Population() {
  return (
    <main className="container px-4 py-4">
      <div className="row">
        <aside className="col-md-3">
          <nav className="sticky-top pt-3" aria-label="Зміст сторінки">
            <h2 className="h4">Зміст</h2>
            <ul className="nav flex-column">
              <a href="#continentsList" className="nav-link" data-bs-toggle="collapse">Континенти</a>
              <a href="#subcontinentsList" className="nav-link" data-bs-toggle="collapse">Субконтиненти</a>
              <a href="#countriesList" className="nav-link" data-bs-toggle="collapse">Країни</a>
              <a href="#introducedList" className="nav-link" data-bs-toggle="collapse">Інтродуковані в</a>
              <a href="#biogeographicList" className="nav-link" data-bs-toggle="collapse">Біогеографічні зони</a>
              <a href="#biomesList" className="nav-link" data-bs-toggle="collapse">WWF Біоми</a>
            </ul>
          </nav>
        </aside>

        <article className="col-md-9">
          <h2 className="h2 text-success mb-4">Ареал поширення горностаїв</h2>
          
          <section id="continents" className="mt-4">
            <h3>
              <button className="btn btn-success w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#continentsList" 
                      aria-expanded="false" 
                      aria-controls="continentsList">
                Континенти
              </button>
            </h3>
            <div className="collapse" id="continentsList">
              <ul className="list-group mb-3">
                <li className="list-group-item">Азія</li>
                <li className="list-group-item">Європа</li>
                <li className="list-group-item">Північна Америка</li>
                <li className="list-group-item">Австралія і Океанія</li>
              </ul>
            </div>
          </section>

          <section id="subcontinents" className="mt-4">
            <h3>
              <button className="btn btn-success w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#subcontinentsList" 
                      aria-expanded="false" 
                      aria-controls="subcontinentsList">
                Субконтиненти
              </button>
            </h3>
            <div className="collapse" id="subcontinentsList">
              <ul className="list-group mb-3">
                <li className="list-group-item">Південна Азія</li>
                <li className="list-group-item">Західна Азія</li>
                <li className="list-group-item">Східна Азія</li>
                <li className="list-group-item">Центральна Азія</li>
              </ul>
            </div>
          </section>

          <section id="countries" className="mt-4">
            <h3>
              <button className="btn btn-success w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#countriesList" 
                      aria-expanded="false" 
                      aria-controls="countriesList">
                Країни
              </button>
            </h3>
            <div className="collapse" id="countriesList">
              <ul className="list-group mb-3 list-columns">
                <li className="list-group-item">Албанія</li>
                <li className="list-group-item">Андорра</li>
                <li className="list-group-item">Австрія</li>
                <li className="list-group-item">Азербайджан</li>
                <li className="list-group-item">Білорусь</li>
                <li className="list-group-item">Бельгія</li>
                <li className="list-group-item">Боснія і Герцеговина</li>
                <li className="list-group-item">Болгарія</li>
                <li className="list-group-item">Канада</li>
                <li className="list-group-item">Китайська Народна Республіка</li>
                <li className="list-group-item">Хорватія</li>
                <li className="list-group-item">Чехія</li>
                <li className="list-group-item">Данія</li>
                <li className="list-group-item">Естонія</li>
                <li className="list-group-item">Фінляндія</li>
                <li className="list-group-item">Франція</li>
                <li className="list-group-item">Грузія</li>
                <li className="list-group-item">Німеччина</li>
                <li className="list-group-item">Греція</li>
                <li className="list-group-item">Угорщина</li>
                <li className="list-group-item">Індія</li>
                <li className="list-group-item">Ірландія</li>
                <li className="list-group-item">Італія</li>
                <li className="list-group-item">Японія</li>
                <li className="list-group-item">Казахстан</li>
                <li className="list-group-item">Киргизстан</li>
                <li className="list-group-item">Латвія</li>
                <li className="list-group-item">Ліхтенштейн</li>
                <li className="list-group-item">Литва</li>
                <li className="list-group-item">Люксембург</li>
                <li className="list-group-item">Північна Македонія</li>
                <li className="list-group-item">Молдова</li>
                <li className="list-group-item">Монголія</li>
                <li className="list-group-item">Чорногорія</li>
                <li className="list-group-item">Нідерланди</li>
                <li className="list-group-item">Норвегія</li>
                <li className="list-group-item">Пакистан</li>
                <li className="list-group-item">Польща</li>
                <li className="list-group-item">Португалія</li>
                <li className="list-group-item">Румунія</li>
                <li className="list-group-item">Росія</li>
                <li className="list-group-item">Сербія</li>
                <li className="list-group-item">Словаччина</li>
                <li className="list-group-item">Словенія</li>
                <li className="list-group-item">Іспанія</li>
                <li className="list-group-item">Швеція</li>
                <li className="list-group-item">Швейцарія</li>
                <li className="list-group-item">Таджикистан</li>
                <li className="list-group-item">Туреччина</li>
                <li className="list-group-item">Україна</li>
                <li className="list-group-item">Велика Британія</li>
                <li className="list-group-item">Сполучені Штати Америки</li>
                <li className="list-group-item">Узбекистан</li>
                <li className="list-group-item">Афганістан</li>
              </ul>
            </div>
          </section>

          <section id="introduced" className="mt-4">
            <h3>
              <button className="btn btn-success w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#introducedList" 
                      aria-expanded="false" 
                      aria-controls="introducedList">
                Інтродуковані види
              </button>
            </h3>
            <div className="collapse" id="introducedList">
              <ul className="list-group mb-3">
                <li className="list-group-item">Нова Зеландія</li>
              </ul>
            </div>
          </section>

          <section id="biogeographic" className="mt-4">
            <h3>
              <button className="btn btn-success w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#biogeographicList" 
                      aria-expanded="false" 
                      aria-controls="biogeographicList">
                Біогеографічні зони
              </button>
            </h3>
            <div className="collapse" id="biogeographicList">
              <ul className="list-group mb-3">
                <li className="list-group-item">Неарктика</li>
                <li className="list-group-item">Палеарктика</li>
                <li className="list-group-item">Індомалайя</li>
              </ul>
            </div>
          </section>

          <section id="biomes" className="mt-4">
            <h3>
              <button className="btn btn-success w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#biomesList" 
                      aria-expanded="false" 
                      aria-controls="biomesList">
                Біоми WWF
              </button>
            </h3>
            <div className="collapse" id="biomesList">
              <ul className="list-group">
                <li className="list-group-item">Помірні широколистяні та мішані ліси</li>
                <li className="list-group-item">Помірні луки</li>
                <li className="list-group-item">Савани і чагарники</li>
                <li className="list-group-item">Гірські луки та чагарники</li>
                <li className="list-group-item">Тундра</li>
                <li className="list-group-item">Тайга</li>
                <li className="list-group-item">Хвойні ліси помірної зони</li>
              </ul>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

export default Population;