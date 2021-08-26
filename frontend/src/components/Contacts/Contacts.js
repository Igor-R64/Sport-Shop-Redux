import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

import { Col, Toast, ToastBody, ToastHeader } from 'reactstrap';

const mapState = { center: [51.53, 46.03], zoom: 13 };

class Contacts extends React.Component {
  state = { showMap: true };

  toggleMap() {
    const { showMap } = this.state;
    this.setState({ showMap: !showMap });
  }

  render() {
    const { showMap } = this.state;

    return (

      <div className="mb-5 container-xxl">
        <div className="p-3 bg-secondary my-2 rounded">
         
            <Col xs="6">
              <Toast>
                <ToastHeader>
                  Контакты
                </ToastHeader>
                <ToastBody>
                  <p >
                    Тел: 8 800 000 000
                  </p>
                  <p>
                    mail: saratov@saratov.ru
                  </p>
                  <p>
                    Адрес: ул. Сакко и Ванцетти д. 00, Саратов, Россия
                  </p>
                </ToastBody>
              </Toast>
            </Col>
          
        </div>
        <YMaps>
          <div id="map-basics">
            {showMap &&
              <Map
                width='1270px'
                height='400px'
                state={mapState} />}
          </div>
        </YMaps>
      </div>
    );
  }
}

export default Contacts;