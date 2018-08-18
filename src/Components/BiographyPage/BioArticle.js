import React, {PureComponent, Fragment} from 'react';


class BlueRow extends PureComponent {
  render() {
    return (
      <div className="row justify-content-center px-3 px-md-0 pt-2 pt-md-3 pt-xl-5">
        <div className="d-none d-md-flex col-md-4 align-items-end justify-content-center">
          <img src={require('../../lib/images/urolog.png')} alt="doctors-photo" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
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
            <div className="d-flex justify-content-end">
              <div className="col-4 col-sm-3">
                <img src={require('../../lib/images/signature.svg')} alt="Signature" className="img-fluid doctors-signature" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlueRow;