/*
  Franquicias
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-02
*/

// Importaciones
import { CatedralMorelia } from "assets";
import { BorderLeft, PageLayout, SEOFriendly, TextWithBulletPoint, TitleH1 } from "components";


// Estructura
const Franquicias = () => {
  return (
    <>
      <SEOFriendly
        title="Términos y Condiciones | Easylav: Tu lavandería ideal"
        url="easylav-react.netlify.app/terminos-condiciones"
        description="Conoce nuestros términos y condiciones"
        author="dspwebstudio" page
        keywords="terminos, condiciones, easylav"
        ogImage={CatedralMorelia}
        ogImageAlt="Catedral de Morelia"
        ogType="website"
      />
      <PageLayout>
        <BorderLeft>
          <TitleH1 className={''}>
            Terminos y Condiciones
          </TitleH1>
        </BorderLeft>
        {/* Columna 1 */}
        <article id='terminos-condiciones' className={'mt-12'}>
          <TextWithBulletPoint titulo='Lorem ipsum dolor sit' texto={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid corporis incidunt laudantium assumenda velit, iste consequuntur temporibus pariatur soluta ad error tempora quia animi unde maiores odio neque. Tempora, inventore dignissimos? Molestias, hic fugit? Exercitationem quis labore deserunt aliquid sint nobis. Est, dignissimos dolorem! Deleniti, tempora possimus, esse officia natus id suscipit ratione aperiam et quia obcaecati ipsum. Omnis dolore cum necessitatibus sint non! Recusandae necessitatibus incidunt non nobis magni perspiciatis blanditiis obcaecati maiores aspernatur repellat iure enim eaque pariatur voluptatum aut, sint cumque hic aliquam aperiam odio earum! Accusamus, pariatur. Iure molestias ipsum dolores repellendus inventore, ad temporibus eaque!'} />
        </article>
        {/* Columna 1 */}
      </PageLayout>
    </>

  );
};

export default Franquicias;
