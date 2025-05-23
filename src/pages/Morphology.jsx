function Morphology() {
  return (
    <main className="container px-4 py-4">
      <article>
        <section>
          <h3 className="h3 text-success">Зовнішній вигляд</h3>
          <p>Горностай — це невеликий хижак з гнучким тілом і короткими лапами. Його хутро взимку чисто біле, за винятком чорного кінчика хвоста, а влітку — буро-коричневе зверху і біле знизу.</p>
        </section>
        <section>
          <h3 className="h3 text-success">Особливості будови</h3>
          <ul>
            <li>Довжина тіла 17—32 см, довжина хвоста 6—12 см, вага 100—300 г.</li>
            <li>Тіло довге та гнучке, що дозволяє легко проникати в нори та щілини.</li>
            <li>Хутро густе і м’яке, з сезонною зміною кольору для маскування.</li>
            <li>Очі темні та великі, вуха короткі та округлі, добре пристосовані до слуху.</li>
          </ul>
        </section>
        <figure className="text-center">
          <img src="/images/hermelin-am-weg-stoat.webp" alt="Білий горностай" className="img-fluid rounded my-4"/>
          <figcaption className="text-muted">Білий горностай</figcaption>
        </figure>
      </article>
    </main>
  );
}

export default Morphology;