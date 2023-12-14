import { Fragment, useState } from "react";
import AccountLayout from "../AccountLayout";
import "./style.css";
import Product from "../../../components/Product/Product";
import Modal from "../../../components/Modal/Modal";
import IMG from "../../../assets/ui-fake-images/portfolio-page-1.jpg";

export const orders = [
  {
    id: 1,
    title: "Bronze faucet",
    description: "description",
    price: "$99.00",
    pending: "in_progress",
    img: IMG,
  },
  {
    id: 2,
    title: "Bronze faucet",
    description: "description",
    price: "$99.00",
    pending: "ordered",
    img: IMG,
  },
  {
    id: 3,
    title: "Bronze faucet",
    description: "description",
    price: "$99.00",
    pending: "in_progress",
    img: IMG,
  },
];

const Orders = () => {
  const [viewOrder, setViewOrder] = useState(false);

  const orderPipeline = [
    {
      id: 1,
      name: "Ordered",
      date: "01.02.2022",
    },
    {
      id: 2,
      name: "Ready to ship",
      date: "01.04.2022",
    },
    {
      id: 3,
      name: "In transit",
      date: "01.10.2022",
    },
    {
      id: 4,
      name: "Out for Delivery",
      date: "01.10.2022",
    },
    {
      id: 5,
      name: "Delivered",
      date: "01.10.2022",
    },
  ];

  return (
    <AccountLayout>
      <div className='ordersContainer'>
        <div className='accountPageTitleContainer'>
          <p className='accountPageTitle'>Orders</p>
        </div>
        <div className='orders'>
          {orders.map((order, i) => (
            <Fragment key={i}>
              <Product
                name={order.title}
                price={order.price}
                pending={order.pending}
                onBtnClick={() => setViewOrder(true)}
                btnText='Manage'
                img={IMG}
              />
            </Fragment>
          ))}
        </div>
      </div>
      <Modal
        title='Order activity'
        open={viewOrder}
        onClose={() => setViewOrder(false)}>
        <div className='orderPipelineWrapper'>
          <div className='orderPipelinePath'></div>
          {orderPipeline.map((pipline, i) => (
            <div className='orderPipeline' key={i}>
              <div className='orderPipelineIcon'></div>
              <p className='orderPipelineTitle'>{pipline.name}</p>
              <p className='orderPipelineDate'>{pipline.date}</p>
            </div>
          ))}
        </div>
        <div className='orderTiming'>
          <div className='orderTimingDays'>
            <div className='orderTimingDay'>
              <p className='orderTimingDayTitle'>Jul 07 2023</p>
              <p className='orderTimingDescription'>22:08</p>
            </div>
          </div>
        </div>
      </Modal>
    </AccountLayout>
  );
};

export default Orders;
