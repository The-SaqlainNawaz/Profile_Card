/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function Nav() {
  return (
    <div>
      <nav className="nav_bar">
        <img src="./logo192.png" alt=""></img>
        <ul className="links">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
function Reasons() {
  return (
    <div className="con">
      <h1>Reasons to learn React</h1>
      <ul>
        <li>Aisy hi</li>
        <li>Aisy hi</li>
        <li>Aisy hi</li>
        <li>Aisy hi</li>
      </ul>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In iure
        nesciunt deleniti aut quo delectus vitae, ab dolores voluptatem
        accusantium praesentium quas cupiditate debitis dolore. Nemo sapiente
        possimus dignissimos tempora excepturi cum. Eius sunt, ratione vero
        dolore nisi vel eveniet cumque recusandae ipsa magnam! Temporibus
        ducimus nulla vel repellendus totam, corporis asperiores reprehenderit
        fuga. Veritatis reiciendis aliquam magnam in, possimus nulla repudiandae
        incidunt fugit vero recusandae vitae excepturi id voluptatum. Aliquid
        voluptas obcaecati sit nesciunt fuga beatae dolore odio, fugit fugiat
        porro possimus molestias perferendis, aperiam minima maiores sed
        delectus! Ipsam, quam molestiae? Corrupti eveniet minus explicabo vero
        ullam recusandae doloremque architecto, excepturi labore ducimus omnis
        veritatis consectetur quia. Sed blanditiis ex error nemo eos quia
        beatae, reiciendis rerum! Dolore expedita dignissimos delectus assumenda
        recusandae nobis impedit at accusamus! Possimus consequatur ab atque
        quisquam quod debitis assumenda ut minima architecto impedit, ratione,
        exercitationem quam laboriosam dolorum incidunt amet tempore
        reprehenderit rerum! Cupiditate nobis maiores officia aliquam dicta?
        Velit non quisquam unde cumque exercitationem eligendi accusantium
        repudiandae repellendus labore quia. Aliquam praesentium consectetur,
        nihil quod facere ducimus repellat consequatur at. Culpa perferendis
        nisi eos autem porro, voluptatem dolore ducimus hic quaerat harum
        tenetur itaque eveniet rerum doloremque laudantium vel placeat ullam
        minus necessitatibus? Eveniet quas aperiam, a possimus veniam pariatur
        perspiciatis laudantium, neque dolorem facere eligendi molestiae sit
        doloribus asperiores nostrum fuga facilis voluptate, unde deserunt
        corporis voluptatem sed iusto minus. Sed ducimus aliquid a, quisquam
        deserunt dignissimos officiis consequuntur facere ad molestias
        consectetur eos debitis sit maiores ea doloremque porro error dolor
        labore enim repellendus suscipit! Cupiditate deserunt cumque totam quae,
        officia nemo tempora quod autem, vitae, est suscipit dolorem sequi
        ducimus illum sint nulla at facilis libero molestias deleniti. Natus,
        cum ab! Ex totam eaque sit quod quae animi, doloribus doloremque aperiam
        nobis vitae est atque minus nihil perferendis mollitia. Recusandae,
        officia ut quisquam expedita debitis ullam at quidem atque incidunt
        nihil voluptatum nostrum sed laborum cum ex corporis quibusdam molestiae
        facilis molestias distinctio minus placeat quo beatae. Totam quis
        voluptate commodi quisquam quam. Temporibus consequuntur explicabo
        atque, nesciunt quidem alias esse magni similique odit exercitationem
        eos ullam, in nam vel ut asperiores inventore, commodi quas! Ullam,
        obcaecati qui error possimus sequi soluta deleniti architecto quos eos
        cum, temporibus inventore in saepe molestias placeat necessitatibus
        aspernatur alias sit iure omnis eum odio delectus quo! Porro, fuga! Quas
        corrupti dolorum a. Reiciendis itaque fuga velit optio similique nulla
        perspiciatis, eos sint magni pariatur culpa ipsum voluptas modi sed
        consequuntur repellendus sit suscipit ullam unde nemo! Aperiam cum
        molestias fuga voluptate obcaecati eveniet sed deserunt tempore
        similique nostrum cumque, quae dignissimos eius explicabo quasi eum iure
        quisquam itaque id distinctio blanditiis incidunt quas! Eius tenetur,
        temporibus non reprehenderit fugiat rem voluptatibus quasi deleniti quam
        quaerat velit sapiente laborum minima cumque sint ducimus delectus
        numquam quos illo fugit. Autem, consequatur atque deserunt distinctio
        enim magni aliquid ipsa a mollitia aperiam adipisci! Quod, veritatis
      </p>
    </div>
  );
}
function Footer() {
  return (
    <small className="footer">© 2020 development. All rights reserved.</small>
  );
}

function MainContent() {
  return (
    <>
      <Nav />,
      <Reasons />,
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainContent />);
