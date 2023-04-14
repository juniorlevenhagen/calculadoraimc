// Props são as
// informações que você passa para uma tag JSX. Por exemplo, className, src, alt, width, e heightsão alguns dos props
// que você pode passar para um <img>:

// PROP = PROPRIEDADE.

// function getImageUrl(person, size = "s") {
//   return "https://i.imgur.com/" + person.imageId + size + ".jpg";
// }

// function Avatar({ person, size }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <>
//       <Avatar
//         size={100}
//         person={{
//           name: "Katsuko Saruhashi",
//           imageId: "YfeOqp2",
//         }}
//       />

//       <Avatar
//         size={undefined}
//         person={{
//           name: "Aklilu Lemma",
//           imageId: "OKS67lh",
//         }}
//       />

//       <Avatar
//         size={50}
//         person={{
//           name: "Lin Lanying",
//           imageId: "1bX5QH6",
//         }}
//       />
//     </>
//   );
// }

//   Os props que você pode passar para uma
//   <img>tag são predefinidos (ReactDOM está em conformidade com o padrão HTML ).
// Mas você pode passar quaisquer adereços para seus próprios componentes, como <Avatar>, para personalizá-los. Veja como!

import { getImageUrl } from './utils.js';

function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70,
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />

      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length}</b>({awards.join(", ")})
        </li>
        <li>
          <b>Discovered:</b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientistis</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
      />
      <Profile
        imageId="YfeOqp2"
        name="Katsuko Saruhashi"
        profession="geochemist"
        discovery="a method for measuring carbon dioxide in seawater"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
      />
    </div>
  );
}
