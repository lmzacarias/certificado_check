import React, { useEffect, useState } from 'react';
import { Alert, Timeline, Button } from 'antd';
import moment from 'moment';
import { DownloadOutlined, CheckOutlined } from '@ant-design/icons';
import document from '../img/document.gif';

const Description = () => {
  const [time, settime] = useState(0);
  const [timeNow, settimeNow] = useState(moment().format('YYYY-MM-DD, HH:mm A'));

  useEffect(() => {
    setTimeout(() => {
      settime(1);
      setTimeout(() => {
        settime(2);
        setTimeout(() => {
          settime(3);
          setTimeout(() => {
            settime(4);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, []);
  console.log(time);
  return (
    <div className="description-cotainer">
      <div className="description-header-cotainer">
        <div>
          <img
            src={document}
            alt="Logo"
            style={{ width: '50px', marginRight: '20px' }}
          />
        </div>
        <div>
          <span> Jenny Lucia Sandoval</span>
          <br />
          <span className="color-text"> Diseño de interiores 4 módulos</span>
        </div>
      </div>

      <div className="margen-top-0">
        <Timeline>
          <Timeline
            pending="Validando datos"
            reverse={false}
            className={`${time >= 4 ? 'display-none' : ''}`}
          ></Timeline>
           <Timeline.Item
            color="green"
            dot={<CheckOutlined style={{ fontSize: '16px' }} />}
            className={`${time >= 4 ? '' : 'display-none'}`}
          >Verificado</Timeline.Item>
          <Timeline.Item className={`${time >= 1 ? '' : 'display-none'}`}>
            Jenny Lucia Sandoval
          </Timeline.Item>
          <Timeline.Item className={`${time >= 2 ? '' : 'display-none'}`}>
            DISEÑO DE INTERIORES 4 MÓDULOS
          </Timeline.Item>
          <Timeline.Item className={`${time >= 3 ? '' : 'display-none'}`}>
            Fecha de aprobación: 2020-07-30
          </Timeline.Item>
          <Timeline.Item className={`${time >= 4 ? '' : 'display-none'}`}>
            Fecha de validación: {timeNow}
          </Timeline.Item>
        </Timeline>
      </div>
      <div className={`${time >= 4 ? '' : 'display-none'}`}>
        <div className="d-f">
          {' '}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/jenny-sandoval.appspot.com/o/qr-2--certificado.jpg?alt=media&token=a81b4a35-e777-42ce-86bb-d53663b45df7"
            alt="Logo"
            className="image-qr"
            style={{ width: '50%', marginBottom: '20px' }}
          />
        </div>
      </div>
      <Alert
        message="Validación exitosa"
        type="success"
        showIcon
        className={`${time >= 4 ? '' : 'display-none'}`}
      />
      <div className="d-flex">
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          className={`${time >= 4 ? '' : 'display-none'}`}
          href="https://firebasestorage.googleapis.com/v0/b/jenny-sandoval.appspot.com/o/Jenny%20Sandoval%20DISE%C3%91O%20DE%20INTERIORES.pdf?alt=media&token=fb002f86-dd83-4356-bc7b-7981e7c0d542"
          target="_blank"
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default Description;
