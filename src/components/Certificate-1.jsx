import React from 'react';
import certi from '../img/cert-jenny-sandoval.jpg';
import qr from '../img/qr.jpg';

import { Result, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
const Certificate = () => {
  return (
    <div className="flex-container-row">
      <div className="width-60">
        <img src={certi} alt="Logo" className="image-resposive" />
      </div>
      <div style={{ padding: '3%' }}>
        <Result
          status="success"
          title={
            <div className="flex-container-colum">
              <img src={qr} alt="Logo" />
              <div>
                <span>Validación correcta</span>
              </div>
            </div>
          }
          subTitle="Jenny Lucia Sandoval"
          extra={[
            <div key={1}>
              {' '}
              <Button
                type="primary"
                key="console"
                href="https://firebasestorage.googleapis.com/v0/b/jenny-sandoval.appspot.com/o/certi-jenny-sandoval-convertido.pdf?alt=media&token=8fe1a143-1aa9-4526-8d3b-6e82f3544675"
                target="_blank"
                icon={<DownloadOutlined />}
              >
                Descargar
              </Button>
            </div>,
          ]}
        />
      </div>
    </div>
  );
};

export default Certificate;
