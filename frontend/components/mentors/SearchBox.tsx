import { useRef } from 'react';

interface SProps {
    initialValue?: string,
    onSearch?: (ev: any, string: string) => void,
    placeholder?: string
};

const SearchBox = ({ initialValue, onSearch, placeholder }: SProps) => {
    const searchInput = useRef(null);
    return (
        <form onSubmit={ (ev) => {
            ev.preventDefault();
            onSearch && onSearch(ev, searchInput!.current!.value);
        }}>
            <div className="w-full flex h-14 bg-gray-100 gap-0 rounded-xl focus-within:shadow transition-shadow focus-within:ring">
                <input
                    ref={searchInput}
                    type="text"
                    className="w-full bg-gray-100 h-14 pl-5 pr-1 rounded-l-xl z-0 focus:outline-none"
                    placeholder={placeholder || 'Search...'}
                    defaultValue={initialValue || ''}
                />
                <button type="submit">
                    <div className="cursor-pointer mr-3 text-gray-800 hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </button>
            </div>
        </form>
    )
};
export default SearchBox;