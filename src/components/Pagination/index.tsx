import {Button, PaginationContainer, Text} from "./styles.ts";
import {ArrowIcon} from "../ArrowIcon";
import {useEffect, useState} from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    handlePageChange: (page: number) => void,
}

export const Pagination = ({ currentPage, totalPages, handlePageChange }: PaginationProps) => {

    const pageChange = (pageNumber: number) => {
        handlePageChange(pageNumber);
    }

    const isActiveButtonPagination = (currentPage: number, index: number): boolean => {
        return currentPage === index + 1;
    }

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        console.log(window.innerWidth)
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getPaginationNumbers = () => {
        if (isMobile) {
            if (currentPage <= 3) {
                return [1, 2, 3, '...', totalPages];
            } else if (currentPage >= totalPages - 2) {
                return [1, '...', totalPages - 2, totalPages - 1, totalPages];
            } else {
                return [ currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
            }
        } else {
            if (totalPages <= 7) {
                return Array.from({ length: totalPages }, (_, i) => i + 1);
            } else if (currentPage <= 4) {
                return [1, 2, 3, 4, 5, '...', totalPages];
            } else if (currentPage >= totalPages - 3) {
                return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
            } else {
                return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
            }
        }
    };

    return (

        <PaginationContainer>
            <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1 }
            >
                <ArrowIcon $active={currentPage === 1 }/>
            </Button>

            {getPaginationNumbers().map((number, index) => (
                <Button
                    key={index}
                    onClick={() => typeof(number) !== 'string' && pageChange(number)}
                    style={{
                        fontWeight: currentPage === index + 1 ? "bold" : "normal",
                    }}
                    $active={number === currentPage}
                    disabled={number === '...' || number === currentPage}
                >
                    <Text $active={isActiveButtonPagination(currentPage, index)}>{number}</Text>
                </Button>
            ))}

            <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <ArrowIcon isLeft={true} $active={currentPage === totalPages }/>
            </Button>
        </PaginationContainer>
    )
}