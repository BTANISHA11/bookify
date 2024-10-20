const OrderListComponent = () => {
  // Sample order data
  const orders = [
    {
      id: '1',
      title: 'The Great Gatsby',
      status: 'Delivered',
      date: '2024-10-15',
    },
    {
      id: '2',
      title: '1984 by George Orwell',
      status: 'Shipped',
      date: '2024-10-10',
    },
    {
      id: '3',
      title: 'To Kill a Mockingbird',
      status: 'Processing',
      date: '2024-10-18',
    },
  ];

  return (
    <div className="grid min-h-[min(80svh,_1000px)] place-items-center duration-200 animate-in fade-in p-5">
      {orders.length > 0 ? (
        <div className="w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
          <ul className="space-y-4">
            {orders.map((order) => (
              <li
                key={order.id}
                className="p-4 border border-gray-200 rounded-lg shadow-sm flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-lg">{order.title}</h3>
                  <p className="text-sm text-gray-500">Order Date: {order.date}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      order.status === 'Delivered'
                        ? 'bg-green-100 text-green-700'
                        : order.status === 'Shipped'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>You don't have any orders yet!</div>
      )}
    </div>
  );
};

export default OrderListComponent;
