import { Fragment } from "react";
import App from "next/app";
import Head from "next/head";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

import "../styles/index.scss";

class MovieApp extends App {
  static async getInitialProps(context) {
    const appProps = await App.getInitialProps(context);
    return {
      ...appProps
    };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <div>
          <Head>
            <title>Home</title>
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
            />
            <script
              src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
              integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
              crossorigin="anonymous"
            ></script>
            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
              integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
              crossorigin="anonymous"
            ></script>
            <script
              src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
              integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
              crossorigin="anonymous"
            ></script>
          </Head>
          <Navbar />
          <div className="view-content">
            <Component {...pageProps} />
          </div>
        </div>
        <Footer />
        <style jsx>
          {`
            .view-content {
              padding-top: 80px;
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default MovieApp;
