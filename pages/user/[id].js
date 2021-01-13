import Head from 'next/head'
//Router
import { useRouter } from 'next/router'
//Styles 
import Button from '../../src/components/CustomButtons/Button.js'
//Fetch 
import fetch from 'isomorphic-unfetch'

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../../src/components/Card/Card.js";
import CardBody from "../../src/components/Card/CardBody.js";
import CardFooter from "../../src/components/Card/CardFooter.js";
import imagesStyles from "../../src/assets/jss/material-kit-react/imagesStyles.js";
import { cardTitle } from "../../src/assets/jss/material-kit-react.js"

const styles = {
    ...imagesStyles,
    cardTitle,
};
const useStyles = makeStyles(styles);

const GetOneUser = (props) => {
    const classes = useStyles();
    return (
        <div className="container">
      <Head>
        <title>List Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>         

        <h1 className="title">
         <a> {props.user['0'].id}. {props.user['0'].fullname} ({props.user['0'].city}, {props.user['0'].country})</a>
        </h1>                   
        <div className="grid">          
         
          <Card style={{width: "20rem"}}>
            <img
                style={{height: "180px", width: "100%", display: "block"}}
                className={classes.imgCardTop}
                src={props.user['0'].profileimageurl}
                alt="Card-img-cap"
            />
            <CardBody>
                <h4 className={classes.cardTitle}>@{props.user['0'].username}</h4>
                <p>{props.user['0'].description}</p>
                <Button type="button" color="primary" href="/">Regresar</Button>
                <Button type="button" color="rose">Actualizar datos</Button>
            </CardBody>
            <CardFooter className={classes.textMuted}>
                Lenguaje: {props.user['0'].lang}
            </CardFooter>
            </Card>   
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    )
}

GetOneUser.getInitialProps = async (ctx) => { 
    const res = await fetch(`http://local.hmartepost.com/moodle38/webservice/rest/server.php?wstoken=11ef0da3e0d571ef0b33f3b8ceb7df39&wsfunction=core_user_get_users&moodlewsrestformat=json&criteria[0][key]=id&criteria[0][value]=${ctx.query.id}`);
    const resJson = await res.json();
    return { user: resJson.users }
}


export default GetOneUser;