<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    {{-- <link rel="stylesheet" href="/assets/css/font-awesome.min.css"/> --}}
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/css/green.css">
    <link rel="stylesheet" href="/assets/css/app.css">
</head>
<body>
    <div id="app">
    <header class="header-area" :class="{'header-sticky': windowTop>30 }">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <!-- ***** Logo Start ***** -->
                            <a href="/" class="logo">
                                <img src="/img/logo.png" style="height:50px" alt="Alya">
                            </a>
           

                        <!-- ***** Logo End ***** -->

                        <!-- ***** Menu Start ***** -->
                        <ul class="nav">
        
                            <li>
                                <a href="green-index.html#welcome">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="green-index.html#welcome">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="green-index.html#welcome">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="green-index.html#welcome">
                                    Discover
                                    ya  da
                                </a>
                            </li>
                    
                            <li>
                                <a href="green-index.html#welcome">
                                    Examples
                                </a>
                            </li>
                       
                        </ul>
                        <a class="menu-trigger">
                            <span>Menu</span>
                        </a>
                        <!-- ***** Menu End ***** -->

                        <!-- ***** Header Buttons Start ***** -->

                        <!-- <ul class="header-buttons" v-if="canLogin">

                                <li>
                                <inertia-link
                                    v-if="page.props.auth.user"
                                    {{-- :href="route('dashboard')" --}}
                                    class="btn-nav-line"
                                >
                                    Dashboard
                                </inertia-link>
                                </li>
                        </ul>
                    <ul class="header-buttons" v-else>
                                <li>
                                    <inertia-link
                                    {{-- :href="route('login')" --}}
                                    class="btn-nav-line"
                                    >
                                    Log in
                                    </inertia-link>
                                        </li>
                                         <li>
                                    <inertia-link
                                    v-if="canRegister"
                                    {{-- :href="route('register')" --}}
                                    class="btn-nav-primary"
                                    >
                                    Register
                                    </inertia-link>
                                     </li>
                    </ul> -->
                        <!-- </div> -->

                        <ul class="header-buttons">
                            @auth
                            <li>
                              <a href="/dashboard" class="btn-nav-line">
                                Panelim
                                </a>
                            </li>
                                @endauth
                                @guest
                                <li>
                                    <a href="/login" class="btn-nav-line">
                                        Giriş Yap</a>
                                </li>
                                <li>
                                    <a href="/register" class="btn-nav-primary">Kayıt Ol</a>
                                </li>
                                @endguest

                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>

        <div id="welcome" class="welcome-area">
            <!-- ***** Header Background Image Start ***** -->
            <div class="right-bg">
                <img src="/images/header.jpg" class="img-fluid float-right" alt="">
            </div>
            <!-- ***** Header Background Image End ***** -->

            <div class="header-bg">
                <img src="/images/header-bg.svg" class="img-fluid" alt="">
            </div>

            <!-- ***** Header Text Start ***** -->
            <div class="header-text">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-6 col-sm-12">
                            <h1>
                                E ticaret Sayfanı Oluştur
                                <span style="display:block;">
                                    Ürün veya Hizmetin için
                                </span>
                                <span style="display:block;">
                                    Sipariş ve Ödeme Altyapısı</span>
                            </h1>
                            <p>İster fiziksel ürünlerini satışa sun. İster verdiğin özel eğitimlerin saat aralığına göre randevu al. Ücretsiz kurulumla hemen başlayabilirsin. </p>
                            <a href="/register" class="btn-primary-line">Kayıt Ol</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ***** Header Text End ***** -->

            <!-- ***** Play Button Start ***** -->
            <div class="play-button-wrapper">
                <a href="https://www.youtube.com/watch?v=dPZTh2NKTm4" class="btn-play">
                    <i class="fa fa-play"></i>
                  
                </a>
            </div>
            <!-- ***** Play Button End ***** -->
        </div>

        <section class="section features-home">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <!-- ***** Features Small Item Start ***** -->
                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <a href="green-features-single.html" class="features-small-item">
                                    <div class="icon">
                                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M6.5 20Q4.22 20 2.61 18.43 1 16.85 1 14.58 1 12.63 2.17 11.1 3.35 9.57 5.25 9.15 5.88 6.85 7.75 5.43 9.63 4 12 4 14.93 4 16.96 6.04 19 8.07 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 17.38 21.69 18.69 20.38 20 18.5 20M6.5 18H18.5Q19.55 18 20.27 17.27 21 16.55 21 15.5 21 14.45 20.27 13.73 19.55 13 18.5 13H17V11Q17 8.93 15.54 7.46 14.08 6 12 6 9.93 6 8.46 7.46 7 8.93 7 11H6.5Q5.05 11 4.03 12.03 3 13.05 3 14.5 3 15.95 4.03 17 5.05 18 6.5 18M12 12Z" />
                                        </svg>
                                    </div>
                                    <h5 class="features-title">
                                        Ücretsiz E Ticaret Sayfanızı oluşturun
                                    </h5>
                                    <p>Tek tıkla e ticaret sayfanızı oluşturun.
                                        Müşterilerinizin sosyal medya hesabınızdan ulaşabileceği ve sipariş verebileceği eticaret siteniz ve kurulum tamamen ücretsiz.
                                    </p>

                                    <div class="next">
                                        <i class="fa fa-angle-right"></i>
                                    </div>
                                </a>
                            </div>
                            <!-- ***** Features Small Item End ***** -->

                            <!-- ***** Features Small Item Start ***** -->
                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <a href="green-features-single.html" class="features-small-item">
                                    <div class="icon">
                                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
                                        </svg>
                                    </div>
                                    <h5 class="features-title">
                                        Tamamen Özelleştirilebilir
                                    </h5>
                                    <p>İstediğiniz gibi tasarlayabilir. Sosyal medya hesabınızdan yönlendirebilir ürünlerinizi sergileyip ödeme alabilirsiniz.
                                        Ücretsiz kayıt olun ve hemen listelemeye başlayın.</p>
                                    <div class="next">
                                        <i class="fa fa-angle-right"></i>
                                    </div>
                                </a>
                            </div>
                            <!-- ***** Features Small Item End ***** -->

                            <!-- ***** Features Small Item Start ***** -->
                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <a href="green-features-single.html" class="features-small-item">
                                    <div class="icon">
                                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M19 6H17C17 3.2 14.8 1 12 1S7 3.2 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6M12 3C13.7 3 15 4.3 15 6H9C9 4.3 10.3 3 12 3M19 20H5V8H19V20M12 12C10.3 12 9 10.7 9 9H7C7 11.8 9.2 14 12 14S17 11.8 17 9H15C15 10.7 13.7 12 12 12Z" />
                                        </svg>
                                    </div>
                                    <h5 class="features-title">
                                        İster ürün ister hizmetinizi satın.
                                    </h5>
                                    <p>Kendi sayfanızda neler olacağını siz belirleyin. Fiziksel ürünlerinizi satabilir veya hizmet ekleyerek hizmetlerinizle müşterilerinizi buluşturabilirsiniz.</p>
                                    <div class="next">
                                        <i class="fa fa-angle-right" ></i>
                                    </div>
                                </a>
                            </div>
                            <!-- ***** Features Small Item End ***** -->

                            <!-- ***** Features Small Item Start ***** -->
                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <a href="green-features-single.html" class="features-small-item">
                                    <div class="icon">
                                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M6,16.5L3,19.44V11H6M11,14.66L9.43,13.32L8,14.64V7H11M16,13L13,16V3H16M18.81,12.81L17,11H22V16L20.21,14.21L13,21.36L9.53,18.34L5.75,22H3L9.47,15.66L13,18.64" />
                                        </svg>
                                    </div>
                                    <h5 class="features-title">
                                        Haftalık Ödeme
                                    </h5>

                                    <p>Her hafta ödemeleriniz hesabınıza yatsın. Siz ürünlerinize odaklanın. Eticaret sisteminiz sizin için çalışsın. Ödemeler her haftanın perşembe günü yapılmaktadır.</p>
                                    </p>
                                    <div class="next">
                                        <i class="fa fa-angle-right" ></i>
                                    </div>
                                </a>
                            </div>
                            <!-- ***** Features Small Item End ***** -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="features" class="section padding-bottom-80 colored">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                        <div class="left-heading">
                            <h2 class="section-title">
                                Ürünlerinizi Sergileyin ve Ödeme Alın
                            </h2>
                        </div>
                        <div class="left-text">
                            <p>Elinizdeki ürünleri sergileyin, promosyonlar oluşturun ve düşük komisyonla satışını yapın. Sosyal medya ve diğer platformlardan müşteriler ürünlerinizi satın alsın.  </p>
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <p>
                                        Ürünlerinizi satışa çıkarmanın ve kitlenizden ödeme almanın en kolay yolu.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <img src="/img/illus1.png" class="img-fluid d-block mx-auto" alt="App">
                    </div>
                </div>
            </div>
        </section>
        <section class="section padding-bottom-80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <img src="/img/illus_2.png" class="img-fluid d-block mx-auto" alt="App">
                    </div>
                  
                    <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                        <div class="left-heading">
                            <h2 class="section-title">
                                Hizmetlerinizin veya Randevularınızın Ödemesini Alın
                            </h2>
                        </div>
                        <div class="left-text">
                            <p>Saatlik veya belirli bir zaman aralığında randevular ile hizmet veriyorsanız hizmetlerini sergileyebileceğiniz ve doluluğunuza göre randevular alabileceğiniz hizmet yönetim e ticaret sistemi tam size göre.</p>
                            <p>
                                Danışmanlık hizmeti, sürekli abonelik gerektiren hizmetler için aktif saatlerinizi müşterilerinize gösterin ve plan oluşturun.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section padding-bottom-90">
            <div class="container">
                <!-- ***** Section Title Start ***** -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="center-heading">
                            <h2 class="section-title">
                                Örnek Sayfalar
                            </h2>
                        </div>
                    </div>
                    <div class="offset-lg-3 col-lg-6">
                        <div class="center-text">
                            <p>İki çeşit mağaza açabilirsiniz. Fiziksel ürünlerinizi satabileceğiniz bir mağaza ya da kişisel servis verdiğiniz mağaza. Dilerseniz hizmetlerinizin yanında fiziksel ürünler de satışını yapabilirsiniz.  </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

                <div  class="donenbody">
                    <div class="donencontainer">
                        <div class="donencarousel">
                            <img class="donenslide" v-for="n in 7" draggable="false" src="/img/happy-young-asian-woman-entrepreneur-smile-for-sa-2022-10-04-22-17-29-utc.jpg">
                        </div>
                    </div>
                </div>    

                <section>
                    <div class="container">
                <!-- ***** Section Title End ***** -->
                
                <div class="row">
                    <!-- ***** Team Item Start ***** -->
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="homepage_market_example">
                            <h6>
                                Ürün Sayfası
                            </h6>
                            <p>Örneğin el yapımı ürünlerinizi satışa çıkarmak istiyorsunuz. El yapımı ürünlerinizi listeleyebilir ve sipariş almaya hazır halde sergileyebilirsiniz. Müşterilerden özel talep alabilir, çeşitli varyasyonları gösterebilirsiniz. Platformu ve sayfanızı müşterilerinize paylaşarak ürünlerinizin satışını, gerekli bilgileri görebilirsiniz.</p>

                            <ul>
                                <li class="btn-home" :class="{active:ex_1==0}" @click="ex_1=0">
                                    <span>
                                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                     Ödeme Altyapısı
                                    </span>
                                </li>
                                <li class="btn-home" :class="{active:ex_1==1}" @click="ex_1=1">
                                    <span>
                                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                        </svg>
                                        Sipariş/Kargo Takibi
                                        </span>
                                </li>
                                <li class="btn-home" :class="{active:ex_1==2}" @click="ex_1=2">
                                    <span>
                                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                        </svg>
                                        Özelleştirilebir Ürünler
                                        </span>

                                </li>
                                <li class="btn-home" :class="{active:ex_1==3}" @click="ex_1=3">
                                    <span>
                                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                        </svg>
                                        Stok Takibi / Hazırlama Süresi
                                        </span>
                                  
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div v-show="ex_1==0" class="homepage_market_example_text">
                            <ul>
                                <li>
                                    Tüm bankaların kredi kartları ile ödeme alma
                                </li>
                                <li>
                                    Kredi Kartları ile Ödeme Alın
                                </li>
                                <li>
                                    Haftada bir hesabınıza ödemeler aktarılsın.
                                </li>
                                <li>
                                    Müşterilerinize Taksit Seçenekleri Sunun
                                </li>
                            </ul>
                        </div>
                        <div v-show="ex_1==1" class="homepage_market_example_text">
                            Yeni Sipariş geldiğinde haber alın.
                            Müşterileriniz siparişi takip etsin.
                            Kargonun nerede olduğu bilgisini müşterilerinize sunun. 
                        </div>
                        <div v-show="ex_1==2" class="homepage_market_example_text">
                                Özelleştirilebilir bir ürün üretiyorsanız müşteriye uygun seçenekler ve fiyatlandırma sunabilirsiniz.
                        </div>
                        <div v-show="ex_1==3" class="homepage_market_example_text">
                            Ürün stoklarınızdan otomatik olarak düşsün.
                            Stoklarınız azaldığında bildirim alın.
                            <br>
                            Ya da
                            <br>
                            Kişiye özel ürünlerde ürünün hazırlanma süresine ve yoğunluğunuza göre kendiniz teslim süresini belirleyin. 
                        </div>
                    </div>
                </div>

                <!-- ***** Section Title End ***** -->
                {{-- <div class="line_grey" /> --}}
           
            </div>
        </section>
              
        {{-- </div> --}}



        <section>
            <div class="container">
                <div class="row">
                    <!-- ***** Team Item Start ***** -->
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="homepage_market_example">
                            <h6>
                                Hizmet Sayfası
                            </h6>
                            <p>Pilates öğretmeni, yoga eğitmeni, diyetisyen ve özel antrenör olarak hizmet veriyorsanız, hizmet sayfası programınızı oluşturmanıza uygun vakitlerinize uygun randevular alıp yönetebileceğiniz sayfa tam size göre</p>

                            <ul>
                                <li class="btn-home" :class="{active:ex_2==0}" @click="ex_2=0">
                                    <span>
                                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                        </svg>
                                        Ödeme Altyapısı
                                        </span>
                                </li>
                                <li class="btn-home" :class="{active:ex_2==1}" @click="ex_2=1">
                                    <span>
                                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                    Randevu Oluşturma
                                    </span>
                                </li>
                                <li class="btn-home" :class="{active:ex_2==2}" @click="ex_2=2">
                                    <span>
                                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                        </svg>
                                        Takvim Eklentisi
                                        </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div v-show="ex_2==0" class="homepage_market_example_text">
                            <ul>
                                <li>
                                    Tüm bankaların kredi kartları ile ödeme alma
                                </li>
                                <li>
                                    Kredi Kartları ile Ödeme Alın
                                </li>
                                <li>
                                    Haftada bir hesabınıza ödemeler aktarılsın.
                                </li>
                                <li>
                                    Müşterilerinize Taksit Seçenekleri Sunun
                                </li>
                            </ul>
                        </div>
                        <div v-show="ex_2==1" class="homepage_market_example_text">
                            Randevular oluşturun ve uygunluğa göre müşteriler ile iletişime geçin.
                        </div>
                        <div v-show="ex_2==2" class="homepage_market_example_text">
                            Takvim Eklentisi ile hatırlatıcılar eklensin.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ***** Team End ***** -->

        <!-- ***** Parallax Start ***** -->
        <div  class="parallax">
            <div class="parallax-content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="info">
                                <p>E ticaret sayfanızı oluşturmak ve satışa başlamak için </p>
                                <a class="btn-white-line" href="#">
                                    Kayıt Olun
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="page-bottom padding-top-80 padding-bottom-80">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-12 col-sm-12 m-auto">
                        <h3 class="padding-bottom-top-60 text-center">Sıkça Sorulan Sorular</h3>
						<div class="accordion" id="accordionExample">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading-1">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">
										<span class="badge">1</span> How does Alya Internet work?
									</button>
								</h2>
								<div id="collapse-1" class="accordion-collapse collapse" aria-labelledby="heading-1" data-bs-parent="#accordionExample">
									<div class="accordion-body">
										<p>Donec tempus sodales dolor, at efficitur enim posuere auctor. Nam et nisi eu purus tempor faucibus aliquet vitae orci. Curabitur sollicitudin leo et magna pharetra efficitur. Nullam et scelerisque lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque faucibus sit amet odio eget scelerisque. Mauris dictum cursus ornare.</p>
										<p>Ut vehicula blandit tellus. Sed sit amet bibendum leo, non sagittis neque. Nam fringilla fermentum tortor, ac gravida velit facilisis id. Donec congue ullamcorper velit, at malesuada arcu faucibus pretium. Donec rhoncus magna sit amet massa venenatis, ut convallis justo ultricies.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading-2">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
										<span class="badge">2</span> How fast is the Alya Internet service?
									</button>
								</h2>
								<div id="collapse-2" class="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionExample">
									<div class="accordion-body">
										<p>Donec tempus sodales dolor, at efficitur enim posuere auctor. Nam et nisi eu purus tempor faucibus aliquet vitae orci. Curabitur sollicitudin leo et magna pharetra efficitur. Nullam et scelerisque lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque faucibus sit amet odio eget scelerisque. Mauris dictum cursus ornare.</p>
										<p>Ut vehicula blandit tellus. Sed sit amet bibendum leo, non sagittis neque. Nam fringilla fermentum tortor, ac gravida velit facilisis id. Donec congue ullamcorper velit, at malesuada arcu faucibus pretium. Donec rhoncus magna sit amet massa venenatis, ut convallis justo ultricies.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading-3">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
										<span class="badge">3</span> Can I keep my home phone number?
									</button>
								</h2>
								<div id="collapse-3" class="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#accordionExample">
									<div class="accordion-body">
										<p>Donec tempus sodales dolor, at efficitur enim posuere auctor. Nam et nisi eu purus tempor faucibus aliquet vitae orci. Curabitur sollicitudin leo et magna pharetra efficitur. Nullam et scelerisque lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque faucibus sit amet odio eget scelerisque. Mauris dictum cursus ornare.</p>
										<p>Ut vehicula blandit tellus. Sed sit amet bibendum leo, non sagittis neque. Nam fringilla fermentum tortor, ac gravida velit facilisis id. Donec congue ullamcorper velit, at malesuada arcu faucibus pretium. Donec rhoncus magna sit amet massa venenatis, ut convallis justo ultricies.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading-4">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
										<span class="badge">4</span> How does the NBN affect my Alya Internet Service?
									</button>
								</h2>
								<div id="collapse-4" class="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#accordionExample">
									<div class="accordion-body">
										<p>Donec tempus sodales dolor, at efficitur enim posuere auctor. Nam et nisi eu purus tempor faucibus aliquet vitae orci. Curabitur sollicitudin leo et magna pharetra efficitur. Nullam et scelerisque lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque faucibus sit amet odio eget scelerisque. Mauris dictum cursus ornare.</p>
										<p>Ut vehicula blandit tellus. Sed sit amet bibendum leo, non sagittis neque. Nam fringilla fermentum tortor, ac gravida velit facilisis id. Donec congue ullamcorper velit, at malesuada arcu faucibus pretium. Donec rhoncus magna sit amet massa venenatis, ut convallis justo ultricies.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading-5">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
										<span class="badge">5</span> I’ve handed in my application. Now what happens?
									</button>
								</h2>
								<div id="collapse-5" class="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#accordionExample">
									<div class="accordion-body">
										<p>Donec tempus sodales dolor, at efficitur enim posuere auctor. Nam et nisi eu purus tempor faucibus aliquet vitae orci. Curabitur sollicitudin leo et magna pharetra efficitur. Nullam et scelerisque lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque faucibus sit amet odio eget scelerisque. Mauris dictum cursus ornare.</p>
										<p>Ut vehicula blandit tellus. Sed sit amet bibendum leo, non sagittis neque. Nam fringilla fermentum tortor, ac gravida velit facilisis id. Donec congue ullamcorper velit, at malesuada arcu faucibus pretium. Donec rhoncus magna sit amet massa venenatis, ut convallis justo ultricies.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading-6">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
										<span class="badge">6</span> What is involved in a standard install? 
									</button>
								</h2>
								<div id="collapse-6" class="accordion-collapse collapse" aria-labelledby="heading-6" data-bs-parent="#accordionExample">
									<div class="accordion-body">
										<p>Donec tempus sodales dolor, at efficitur enim posuere auctor. Nam et nisi eu purus tempor faucibus aliquet vitae orci. Curabitur sollicitudin leo et magna pharetra efficitur. Nullam et scelerisque lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque faucibus sit amet odio eget scelerisque. Mauris dictum cursus ornare.</p>
										<p>Ut vehicula blandit tellus. Sed sit amet bibendum leo, non sagittis neque. Nam fringilla fermentum tortor, ac gravida velit facilisis id. Donec congue ullamcorper velit, at malesuada arcu faucibus pretium. Donec rhoncus magna sit amet massa venenatis, ut convallis justo ultricies.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading-7">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">
										<span class="badge">7</span> What if mapping is unsuccessful, do I have any other options? 
									</button>
								</h2>
								<div id="collapse-7" class="accordion-collapse collapse" aria-labelledby="heading-7" data-bs-parent="#accordionExample">
									<div class="accordion-body">
										<p>Donec tempus sodales dolor, at efficitur enim posuere auctor. Nam et nisi eu purus tempor faucibus aliquet vitae orci. Curabitur sollicitudin leo et magna pharetra efficitur. Nullam et scelerisque lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque faucibus sit amet odio eget scelerisque. Mauris dictum cursus ornare.</p>
										<p>Ut vehicula blandit tellus. Sed sit amet bibendum leo, non sagittis neque. Nam fringilla fermentum tortor, ac gravida velit facilisis id. Donec congue ullamcorper velit, at malesuada arcu faucibus pretium. Donec rhoncus magna sit amet massa venenatis, ut convallis justo ultricies.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
		
				</div>
			</div>
		</div>


    </div>
        <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

        <script>
            const app = new Vue({
            el: '#app',
            data() {
                return {
                    windowTop: 0,
                    ex_1: 0,
                    ex_2: 0
                }
            },
            mounted () {
            window.addEventListener('scroll', this.onScroll)
            },
            beforeDestroy () {
                window.removeEventListener('scroll', this.onScroll)
            },
            methods: {
                onScroll (e) {
                    this.windowTop =
                        window.top.scrollY /* or: e.target.documentElement.scrollTop */
                },
                randomImage () {
      return `https://unsplash.it/350/140/?${Math.floor(Math.random(0,100) * 100)}`
    }
            },
        }).$mount('#app');
        </script>
</body>
</html>