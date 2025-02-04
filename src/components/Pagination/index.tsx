import {Button, PaginationContainer, Text} from "./styles.ts";
import {ArrowIcon} from "../ArrowIcon";

interface PaginationProps {
    currentPage: number;
    totalPage: number;
    handlePageChange: (page: number) => void,
}

export const Pagination = ({ currentPage, totalPage, handlePageChange }: PaginationProps) => {

    const paginationLength = totalPage > 5 ? 5 : totalPage;

    const changePage = (currentPage: number) => {
        handlePageChange(currentPage)
    };

    const isActiveButtonPagination = (currentPage: number, index: number): boolean => {
        return currentPage === index + 1;
    }

    return (

        <PaginationContainer>
            <Button
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1 }
            >
                <ArrowIcon $active={currentPage === 1 }/>
            </Button>

            {Array.from({ length: paginationLength }, (_, index) => (
                <Button
                    key={index + 1}
                    onClick={() => changePage(index + 1)}
                    style={{
                        fontWeight: currentPage === index + 1 ? "bold" : "normal",
                    }}
                    $active={isActiveButtonPagination(currentPage, index)}
                    disabled={isActiveButtonPagination(currentPage, index)}
                >
                    <Text $active={isActiveButtonPagination(currentPage, index)}>{index + 1}</Text>
                </Button>
            ))}

            <Button
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPage}
            >
                <ArrowIcon isLeft={true} $active={currentPage === totalPage }/>
            </Button>
        </PaginationContainer>
    )
}