import { Paragraph, ParagraphContainer } from 'components';

export const DerechosAutorPropiedadIndustrial = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">
          20. DERECHOS DE AUTOR Y PROPIEDAD INDUSTRIAL.
        </h2>
        <div className="flex flex-col gap-8 ml-6">
          <Paragraph>
            20.1. El Programa de “Tarjeta de Recompensa”, sus sucursales, sus logotipos, así como todo el material de la
            misma son marcas, nombres de dominio, nombres comerciales, avisos comerciales, entre otros, son propiedad
            del mismo, sus sucursales y/o sus proveedores y están protegidos por los tratados internacionales y las
            leyes aplicables en materia de propiedad intelectual y derechos de autor.
          </Paragraph>
          <Paragraph>
            20.2. Los derechos de autor sobre el contenido, organización, recopilación, compilación, información,
            logotipos, fotografías, imágenes, programas, aplicaciones, software, código fuente, desarrollo y en general
            cualquier información contenida, publicada y necesaria para el funcionamiento del Programa de, se encuentran
            debidamente protegidos a favor del Programa, sus sucursales y/o sus proveedores, en su caso, de conformidad
            con la legislación aplicable en materia de propiedad intelectual e industrial.
          </Paragraph>
          <Paragraph>
            20.3. Se prohíbe expresamente al Usuario modificar, alterar o suprimir, ya sea en forma total o parcial, los
            avisos, marcas, nombres comerciales, señas, anuncios, logotipos o en general cualquier indicación que se
            refiera a la propiedad de la información contenida en el Programa.
          </Paragraph>
        </div>
      </ParagraphContainer>
    </div>
  );
};
