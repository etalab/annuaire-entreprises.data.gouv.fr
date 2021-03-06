import React from 'react';

import Page from '../layouts';
import ButtonLink from '../components/button';
import constants from '../constants';

const ServerError: React.FC = () => {
  return (
    <Page small={true} title="Cette page est introuvable">
      <div className="content-container">
        <div className="layout-left">
          <h1>Cette page est introuvable 🔍</h1>
        </div>
        <p>
          Si vous êtes arrivé sur cette page en tapant une url dans votre
          navigateur, c'est probable que vous vous soyez trompé d'url.
        </p>
        <br />
        <p>
          Si vous êtes arrivé sur cette page en cliquant sur un lien du site,
          merci de <a href={constants.links.mailto}>nous contacter</a> pour que
          nous puissions trouver la panne 🕵️‍♀️.
        </p>
        <br />
        <p>En attendant, vous pouvez toujours :</p>
        <br />
        <div className="layout-left">
          <ButtonLink href="/faq" alt>
            Consulter notre page d'aide
          </ButtonLink>
          <span>&nbsp;</span>
          <ButtonLink href="/">Retourner à la page d’accueil</ButtonLink>
        </div>
      </div>
    </Page>
  );
};

export default ServerError;
