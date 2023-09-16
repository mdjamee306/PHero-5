/* eslint-disable react/prop-types */
const Carts = ({ selectItem,remaining, total }) => {
    return (
        <div className="p-6 shadow-xl">
            <div><h1 className="text-[#2F80ED] text-lg font-bold">Credit Hour Remaining {remaining} hr</h1></div>
            <hr className="mt-4" />
            <div>
                <h3 className="text-xl font-bold mt-4">Course Name </h3>

                <ul className="mt-5 text-[#1C1B1B99] text-base font-normal">
                    {
                        selectItem.map((item) => (
                            <li className="mx-4 list-decimal" key={item.id} >{item.title}</li>
                        ))
                    }
                </ul>
            </div>
            <hr className="mt-6" />
            <div>
                <h3 className="text-xl font-medium mt-6">Total Credit Hour : {total}</h3>
            </div>
        </div>
    );
};

export default Carts;