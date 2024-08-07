            {orders.map((order, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{order.recipient}</td>
                <td className="border px-4 py-2">{order.deliveryDate}</td>
                <td className="border px-4 py-2">{order.address}</td>
                <td className="border px-4 py-2">
                  <button className="btn btn-secondary mr-2">查看</button>
                  <button className="btn btn-danger">刪除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  );
}
