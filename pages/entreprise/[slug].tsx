import React from 'react';

import { GetServerSideProps } from 'next';
import Page from '../../layouts';
import { getCompanyTitle, isSirenOrSiret } from '../../utils/helper';
import {
  Etablissement,
  getUniteLegale,
  UniteLegale,
} from '../../model';
import EntrepriseSection from '../../components/entrepriseSection';
import EtablissementListeSection from '../../components/etablissementListeSection';
import Title from '../../components/titleSection';
import redirect from '../../utils/redirect';
import EtablissementSection from '../../components/etablissementSection';

interface IProps {
  etablissement: Etablissement;
  uniteLegale: UniteLegale;
}

const About: React.FC<IProps> = ({
  etablissement,
  uniteLegale,
}) => (
  <Page
    small={true}
    title={`Page entreprise - ${getCompanyTitle(uniteLegale)} - ${
      uniteLegale.siren
    }`}
  >
    <div className="content-container">
      <Title
        name={
          uniteLegale.statut_diffusion === 'N'
            ? 'Nom inconnu'
            : getCompanyTitle(uniteLegale)
        }
        siren={uniteLegale.siren}
        siret={etablissement.siret}
        isEntreprise={true}
        isSiege={etablissement.etat_administratif === 'A'}
        isNonDiffusible={uniteLegale.statut_diffusion === 'N'}
      />
          <EntrepriseSection uniteLegale={uniteLegale} />
          <EtablissementSection  uniteLegale={uniteLegale} etablissement={uniteLegale.etablissement_siege} usedInEntreprisePage={true}/>
          <EtablissementListeSection uniteLegale={uniteLegale} />
    </div>
    <style jsx>{`
      .content-container {
        margin: 20px auto 40px;
      }
    `}</style>
  </Page>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  //@ts-ignore
  const slug = context.params.slug as string;

  const siretOrSiren = slug ? slug.substr(slug.length - 9) : slug;

  if (!isSirenOrSiret(siretOrSiren)) {
    redirect(context.res, '/404');
  }

  // siege social
  const uniteLegale = await getUniteLegale(siretOrSiren as string);

  if (uniteLegale.statut_diffusion === 'N') {
    redirect(context.res, `/introuvable/siren?q=${siretOrSiren}`);
  }

  return {
    props: {
      etablissement: uniteLegale.etablissement_siege || {},
      uniteLegale,
      isEntreprise: true,
    },
  };
};

export default About;
