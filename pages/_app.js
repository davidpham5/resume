import App from "next/app";
import Page from "../components/Page";
import '../components/styles/_main.css';

class ResumeApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}

export default ResumeApp;