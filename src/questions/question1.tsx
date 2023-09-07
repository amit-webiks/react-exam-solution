// Starting Code

interface Book {
    name: string
    author: string
    year: number
    forKids: boolean
}


interface Props {
    book : Book
}
const BookCard = (obj : Props) => {
    return (
        <>
            {obj.book.name}
        </>
    )
};

export default BookCard;
