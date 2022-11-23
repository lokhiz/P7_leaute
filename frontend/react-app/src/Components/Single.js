import Delete from "../assets/delete.png";
import Edit from "../assets/edit.png";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="single">
      <div className="content-single">
        <div className="img-and-user">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
            alt=""
            className="img-post"
          />
          <div className="user">
            <div className="user-without-icons">
              <img
                src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg"
                alt=""
                className="user-img"
              />
              <div className="info">
                <span>John</span>
                <p>Posted 2 days ago</p>
              </div>
            </div>
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img className="icons" src={Edit} alt="" />
              </Link>
              <Link>
                <img className="icons" src={Delete} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="post-edit">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
            illo.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, ipsa mollitia et quisquam unde tempora dolorum impedit
            amet molestias saepe aliquid doloremque? Voluptatem aliquam,
            blanditiis provident laborum voluptates dolorem neque! Eos
            aspernatur repudiandae nesciunt ipsum in, architecto sint ea.
            Voluptatum cupiditate voluptatibus autem dolor, fuga unde sunt
            aspernatur facere dignissimos corporis impedit beatae fugit
            perspiciatis quos culpa placeat quod aut rerum, atque ducimus.
            Doloremque ex voluptates quasi corporis esse omnis exercitationem
            earum repellat. Blanditiis, temporibus ab eius eligendi accusantium
            impedit autem ipsam ipsa suscipit et libero velit expedita! Quaerat
            porro optio quisquam, enim reiciendis accusantium? Repellendus, eos
            nemo nulla eligendi, dolore itaque mollitia praesentium totam
            molestias voluptatibus commodi aut magnam animi quisquam eum iure?
            Itaque officiis accusantium fugiat omnis, voluptas est culpa dolorem
            assumenda. Suscipit, cupiditate minima non praesentium quia delectus
            laborum aliquam atque nam hic quam explicabo maiores ipsa voluptate
            iure officiis laudantium ex quae dolores ullam doloremque placeat
            perspiciatis excepturi sapiente. Aliquam corporis at laudantium vero
            reprehenderit dolores iusto fugit alias ducimus nemo odio quaerat
            impedit debitis eum quod dolore necessitatibus, dicta sint ullam
            porro officia quisquam nobis. Eos tenetur est dignissimos porro
            omnis officiis quaerat, facere, sint, voluptates neque blanditiis?
            Ex, ullam vitae? Vero accusantium exercitationem velit? Quas
            voluptatibus recusandae, error laborum sint culpa neque. Nihil
            laboriosam amet aperiam eius veritatis, pariatur, quidem fuga
            deleniti ullam similique, ab accusamus tenetur! Corrupti illo, vitae
            eaque possimus iusto sint ea ut sunt provident architecto,
            voluptates porro maiores odit omnis totam cum neque! Aut
            consectetur, est doloremque amet voluptatum sapiente quos. Eligendi
            dicta modi fugiat perspiciatis, sint voluptas, provident ut corporis
            eaque non cupiditate ex sunt aperiam voluptatum nobis libero in
            earum esse pariatur reprehenderit maiores soluta molestiae aliquam!
            Quis, eaque cupiditate modi soluta debitis adipisci dolorem pariatur
            officia non expedita repellendus obcaecati natus dignissimos, ab
            neque labore aspernatur earum. Necessitatibus nesciunt officia
            libero sunt, fugiat quam possimus at dolorem tenetur a sed nisi
            repellat, sit assumenda doloremque provident cum numquam ipsum harum
            architecto? Libero, doloribus ad temporibus voluptates vitae vel a
            eos fugiat reprehenderit facere, omnis autem eum laudantium suscipit
            aperiam dolorum ab, modi aliquid aspernatur exercitationem odio
            voluptatum perspiciatis voluptate. Inventore, facilis autem
            praesentium nesciunt doloremque dolore? A maxime quos repudiandae et
            neque velit nobis, dolor obcaecati similique laborum odio, facilis
            mollitia quis perferendis non harum enim fuga magnam. Iste facilis
            similique repellat molestiae repellendus voluptatem rerum sed, quas
            voluptatum nesciunt adipisci eligendi asperiores, est ut provident
            veritatis. Impedit nisi consectetur debitis, qui tempora quam
            voluptate repudiandae eveniet, deserunt eos est. Porro, ratione
            eius! Facere velit quo dolor reprehenderit, porro alias libero
            excepturi fuga doloribus enim inventore. Expedita necessitatibus non
            aliquam nulla praesentium accusamus quae iusto, quibusdam ratione!
            Amet quam ut consequatur inventore quo rerum, veritatis voluptates
            quibusdam reprehenderit consequuntur minus sed eos repellendus enim
            odit laudantium quis harum laboriosam maiores? Et explicabo rem
            facilis magnam molestiae iure ea architecto blanditiis placeat,
            officiis, repudiandae distinctio nemo. Debitis voluptates eveniet
            iusto reiciendis expedita tenetur ratione inventore fugiat quas
            beatae ab id, iste repudiandae, enim tempore minima nulla omnis
            magni?
          </p>
        </div>
      </div>
      <Menu />
      <Link to={"/login"} className="disconnect-button">
        Déconnexion
      </Link>
    </div>
  );
};

export default Single;
