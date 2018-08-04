import React, {PureComponent, Fragment} from 'react';


class Bio extends PureComponent {
  render() {
    return (
      <div className="row justify-content-center border-top">
        <div className="col-12 col-md-10">
          <div className="row">
            <div className="col-12 col-lg-6 d-flex align-items-start justify-content-center">
              <div className="d-flex flex-column justify-content-center p-2 p-md-4">
                <span className="doctors-name-2 font-39 my-1 my-md-2">PhD Dr. Fərman Həsənov</span>
                <span className="doctors-prof-2 font-28 my-1 my-md-3">Ağız və üz-çənə cərrahı</span>
                <div className="doctors-mini-article my-1 my-md-3">
                  <p className="font-16 text-justify">
                    Çoxları düşünür ki, Lorem Ipsum latıncadan təsadüfü seçilmiş sözcüklərdən ibarətdir, amma bu belə deyil.
                    Onun bizim eramızdan qabaq 45-ci il tarixinə – klassik Latın ədəbiyyatına qədər uzanan 2000 illik bir
                    keçmişi vardır. Virginia ştatında Hampden-Sydney kollecinin latin dili üzrə professoru Richard McClintock
                    lorem Ipsumun qəribə və anlaşılması çətinlik törədən “consectetur” sözünü götürərək klassik latın
                    ədəbiyyatında onun köklərini axtarmağa başlamışdır. Bu zaman mübahisəsiz qəbul olunan bir qaynağa
                    təsadüf etmişdir. Bu qaynaq eramızdan əvvəl 45-ci ildə Çiçero tərəfindən yazılan “de Finibus Bonorum et
                    Malorum” (Xeyir və Şərin sərhədləri) əsərinin 1.10.32 və 1.10.33 bölmələrində yerləşir. Bu traktat əxlaqi
                    mazmunlu olub, intibah dövründə çox məşhur olmuşdur. Lorem Ipsumun ilk sətri “Lorem ıpsum doler sit amet”
                    əsərin 1.10.32 saylı sətirlərindən birində yerləşməkdədir. XVI əsrdən bəri istifadə olunan klassik Lorem
                    Ipsum mətnləri yenidən tərcümə olunmuşdur. Həmçinin Çiçeronun “de Finibus Bonorum et Malorum” əsərinin
                    1.10.32 və 1.10.33-cü bölmələri 1914-cü ildə H. Rackham tərəfindən ingiliscəyə tərcümə olunmuşdur.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-none col-lg-6 d-lg-flex align-items-center justify-content-center">
              <div className="d-flex flex-column justify-content-center p-2 p-md-4">
                <img src={require('../../lib/images/article3.jpg')} alt="biophoto" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;