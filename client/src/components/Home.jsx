import React, { useEffect, useState } from "react";
import { bookBaseUrl } from "../../axiosInstance";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";

function Home() {
    const [bookForm, setBookForm] = useState({
        bookName: "",
        bookTitle: "",
        Author: "",
        SellingPrice: "",
        publishDate: "",
        Id: ""
    });
    const [bookList, setBookList] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false)
    const getAllBookList = async () => {
        try {
            const { data } = await bookBaseUrl.get("booklists");
            console.log("bookList ", data);
            setBookList(data?.bookList);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllBookList();
    }, []);

    const handelFormChange = (e) => {
        const { name, value } = e.target;
        setBookForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handelSubmit = async () => {
        try {
            if (!isUpdating) {

                if (
                    !bookForm.bookName ||
                    !bookForm.bookTitle ||
                    !bookForm.Author ||
                    !bookForm.SellingPrice
                ) {
                    alert("All field's are requiured");
                }
                const data = await bookBaseUrl.post("/addbook", bookForm);
                if (data?.data.message) {
                    alert(data?.data.message);
                    getAllBookList()
                    setBookForm({
                        bookName: "",
                        bookTitle: "",
                        Author: "",
                        SellingPrice: "",
                        publishDate: "",
                        Id: ""
                    });
                    setIsUpdating(false)
                }
            } else {
                const data = await bookBaseUrl.put("/updatebook", bookForm);
                if (data?.data.message) {
                    alert(data?.data.message);
                    getAllBookList()
                    setBookForm({
                        bookName: "",
                        bookTitle: "",
                        Author: "",
                        SellingPrice: "",
                        publishDate: "",
                        Id: ""
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handelDelete = async (id) => {
        try {
            const data = await bookBaseUrl.post('deletebook', {
                Id: id,
            })
            if (data?.data?.Success) {
                // alert(data?.message)
                getAllBookList();
            }
        } catch (error) {
            console.log(error)
        }

    };

    const handelUpdate = (data) => {
        setBookForm(
            {
                bookName: data?.bookName,
                bookTitle: data?.bookTitle,
                Author: data?.Author,
                SellingPrice: data?.SellingPrice,
                publishDate: data?.publishDate,
                Id: data?._id
            }
        )
        setIsUpdating(true)
    }

    return (
        // input section
        <div className="w-full px-5 min-h-[calc(100vh-60px)]">
            <div className="w-full grid grid-cols-5 gap-3 my-4">
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Book Name</label>
                    <input
                        type="text"
                        placeholder="book name"
                        className="w-full border-2 border-gray-500 text-gray-800 rounded-sm outline-none h-8 px-2"
                        name="bookName"
                        value={bookForm.bookName}
                        onChange={handelFormChange}
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Book Title</label>
                    <input
                        type="text"
                        placeholder="book Title"
                        className="w-full border-2 border-gray-500 text-gray-800 rounded-sm outline-none h-8 px-2"
                        name="bookTitle"
                        value={bookForm.bookTitle}
                        onChange={handelFormChange}
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Author</label>
                    <input
                        type="text"
                        placeholder="Author"
                        className="w-full border-2 border-gray-500 text-gray-800 rounded-sm outline-none h-8 px-2"
                        name="Author"
                        value={bookForm.Author}
                        onChange={handelFormChange}
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Selling Price</label>
                    <input
                        type="text"
                        placeholder="selling price"
                        className="w-full border-2 border-gray-500 text-gray-800 rounded-sm outline-none h-8 px-2"
                        name="SellingPrice"
                        value={bookForm.SellingPrice}
                        onChange={handelFormChange}
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Publish date</label>
                    <input
                        type="date"
                        placeholder="Publish date"
                        className="w-full border-2 border-gray-500 text-gray-800 rounded-sm outline-none h-8 px-2"
                        name="publishDate"
                        value={bookForm.publishDate}
                        onChange={handelFormChange}
                    />
                </div>
            </div>

            <div className="w-full flex justify-end">
                <button
                    className="bg-gray-500 text-white h-9 w-22 rounded-md cursor-pointer"
                    onClick={handelSubmit}
                >
                    Submit
                </button>
            </div>

            {/* tabel section */}
            <div className="w-full mt-10">
                <div className="w-full">
                    <table className="w-full bg-white divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="tracking-wide px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Book Name
                                </th>
                                <th className="tracking-wide px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Book Title
                                </th>
                                <th className="tracking-wide px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Author
                                </th>
                                <th className="tracking-wide px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    selling price
                                </th>
                                <th className="tracking-wide px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Publish date
                                </th>
                                <th className="tracking-wide px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {bookList.map((book, index) => {
                                {/* console.log("find all data present in book" , book._id) */ }
                                return (
                                    <tr className="hover:bg-gray-200" key={index}>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            {book?.bookName}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            {book?.bookTitle}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            {book?.Author}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            {book?.SellingPrice}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            {book?.publishDate}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            <div className="w-20 flex justify-center gap-5">
                                                <div
                                                    className="h-8 w-8 flex justify-center items-center bg-red-100 text-red-600 cursor-pointer"
                                                    onClick={() => handelDelete(book._id)}
                                                >
                                                    <span>
                                                        <MdDelete />
                                                    </span>
                                                </div>
                                                <div className="h-8 w-8 flex justify-center items-center bg-green-100 text-green-600 cursor-pointer"
                                                    onClick={() => handelUpdate(book)}
                                                >
                                                    <span>
                                                        <FaPen />
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
