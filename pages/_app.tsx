import Head from 'next/head';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="keywords" content="modern, study, cafe" />
        <meta
          name="description"
          content="Study Cafe, Modern, Modern Study Cafe, 모던스터디, 모던스터디카페, 스터디카페"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/logo192.png" />

        {/* Plugins */}
        <link rel="stylesheet" href="/css/plugins.css" />

        {/* Revolution Slider css */}
        <link rel="stylesheet" href="/css/rev_slider/settings.css" />
        <link rel="stylesheet" href="/css/rev_slider/layers.css" />
        <link rel="stylesheet" href="/css/rev_slider/navigation.css" />

        {/* Custom Css */}
        <link rel="stylesheet" id="colors" href="/css/styles.css" />

        <title>모던 스터디 카페</title>
      </Head>

      <div id="preloader">
        <div className="row loader">
          <div className="loader-icon" />
        </div>
      </div>
      
      <Component {...pageProps} />

      <script src="/js/jquery.min.js"></script>
      <script src="/js/modernizr.js"></script>
      <script src="/js/bootstrap.min.js"></script>
      <script src="/js/nav-menu.js"></script>
      <script src="/js/easy.responsive.tabs.js"></script>
      <script src="/js/owl.carousel.js"></script>
      <script src="/js/jquery.counterup.min.js"></script>
      <script src="/js/jquery.stellar.min.js"></script>
      <script src="/js/waypoints.min.js"></script>
      <script src="/js/tabs.min.js"></script>
      <script src="/js/countdown.js"></script>
      <script src="/js/jquery.magnific-popup.min.js"></script>
      <script src="/js/isotope.pkgd.min.js"></script>
      <script src="/js/chart.min.js"></script>
      <script src="/js/owl.carousel.thumbs.js"></script>
      <script src="/js/animated-headline.js"></script>
      <script src="/js/clipboard.min.js"></script>
      <script src="/js/prism.js"></script>
      <script src="/js/rev_slider/jquery.themepunch.tools.min.js"></script>
      <script src="/js/rev_slider/jquery.themepunch.revolution.min.js"></script>
      <script src="/js/rev_slider/extensions/revolution.extension.actions.min.js"></script>
      <script src="/js/rev_slider/extensions/revolution.extension.carousel.min.js"></script>
      <script src="/js/rev_slider/extensions/revolution.extension.kenburn.min.js"></script>
      <script src="/js/rev_slider/extensions/revolution.extension.layeranimation.min.js"></script>
      <script src="/js/rev_slider/extensions/revolution.extension.migration.min.js"></script>
      <script src="/js/rev_slider/extensions/revolution.extension.navigation.min.js"></script>
      <script src="/js/rev_slider/extensions/revolution.extension.parallax.min.js"></script>
      <script src="/js/rev_slider/extensions/revolution.extension.slideanims.min.js"></script>
      <script src="/js/rev_slider/extensions/revolution.extension.video.min.js"></script>
      <script src="/js/map.js"></script>
      <script src="/js/main.js"></script>
      <script src="/js/mailform/jquery.form.min.js"></script>
      <script src="/js/mailform/jquery.rd-mailform.min.c.js"></script>
    </>
  );
};

export default App;
