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
          <span className="color-text"> Modelado y animación Revit 2020 + Lumion 9</span>
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
          Modelado y animación Revit + Lumion
          </Timeline.Item>
          <Timeline.Item className={`${time >= 3 ? '' : 'display-none'}`}>
            Fecha de aprobación: 2020-09-13
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
            src="https://firebasestorage.googleapis.com/v0/b/jenny-sandoval.appspot.com/o/qr-3--certificado.jpg?alt=media&token=8a312d06-ca70-4c25-b770-eac2506fc87f"
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
          href="https://firebasestorage.googleapis.com/v0/b/jenny-sandoval.appspot.com/o/Jenny%20Sandoval%20MODELADO%20Y%20ANIMACI%C3%93N.pdf?alt=media&token=a03e0a5f-9c9d-4a7a-95d3-388a6cd420ac"
          target="_blank"
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default Description;
