export interface InProduct {
  id: number
  image: string
  barcode: string
  bookNo: string
  bookName: string
  price: number
  quantity: number
  status: string
  createAt: string
  updateAt: string
  deleteAt: string

}

export interface TitleProduct {
  id: string
  key: string
}

export interface InOrder extends InProduct{
  barcode: string;
  bookNo: string;
  bookName: string;
}

