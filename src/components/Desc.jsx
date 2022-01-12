import React, { useEffect, useState } from 'react';
import { Alert, Timeline, Button } from 'antd';
import moment from 'moment';
import { DownloadOutlined } from '@ant-design/icons';
import document from '../img/document.gif';
import qr from '../img/qr-modelado.jpg';

const Description = () => {
  const [time, settime] = useState(0);
  const [timeNow, settimeNow] = useState(moment().format('YYYY-MM-DD'));

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
            src={qr}
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
          href="https://firebasestorage.googleapis.com/v0/b/jenny-sandoval.appspot.com/o/certi-jenny-sandoval-convertido.pdf?alt=media&token=8fe1a143-1aa9-4526-8d3b-6e82f3544675"
          target="_blank"
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default Description;
