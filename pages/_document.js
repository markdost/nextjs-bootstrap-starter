import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
            rel="stylesheet"
          ></link>
          {/* To generate the manifest follow this url:
          https://www.simicart.com/manifest-generator.html/ */}
          <link rel="icon" href="/icon-512x512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#0d6efd" />
          {/* Open Graph */}
          <meta property="og:url" content="https://www.company-url-here.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="App Name" />
          <meta property="og:image" content="/icon-512x512.png" />
          <meta name="twitter:title" content="App Name" />
          <meta name="twitter:image" content="/icon-512x512.png" />
          <meta property="og:site_name" content="App Name" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
