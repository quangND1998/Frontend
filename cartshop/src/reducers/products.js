var  initialSate=[
    {
        id :1,
        name :"Iphone7",
        image:'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600.jpg',
        descrtiption :"Sản phẩm do apple sản xuất",
        price :500,
        inventory :10,
        rating :5
    },
    {
        id :2,
        name :"SamSung",
        image:'https://cdn.tgdd.vn/Products/Images/42/78479/samsung-galaxy-s8-4-400x460-400x460.png',
        descrtiption :"Sản phẩm do SamSung sản xuất",
        price :400,
        inventory :15,
        rating :4
    },
    {
        id :3,
        name :"OppoF1",
        image:'https://cdn.tgdd.vn/Products/Images/42/217856/oppo-a31-2020-trang-600x600-1-600x600.jpg',
        descrtiption :"Sản phẩm do china sản xuất",
        price :200,
        inventory :15,
        rating :3
    },
 

]
const products = (state =initialSate,action)=>{
    switch (action.type){
        default :return [...state];
    }

};
export default products;