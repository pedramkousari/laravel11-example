import { Link } from "@inertiajs/react";

export default function Table({ items, columns, action, primary }) {
    function renderItems() {
        return items.map((item) => (
            <tr className="h-10" key={item.id}>
                <td>#{item.id}</td>
                {columns.map((column, index) => (
                    <td key={index}>{item[column]}</td>
                ))}
                <td>
                    <Link
                        className="text-blue-400"
                        href={route(action, item.id)}
                    >
                        View Details
                    </Link>
                </td>
            </tr>
        ));
    }

    function renderHeader() {
        return columns.map((column, index) => (
            <th key={index}>{column.toUpperCase()}</th>
        ));
    }

    return (
        <table className="w-full text-center table-fixed">
            <thead>
                <tr className="bg-slate-100 h-9">
                    <th>{primary.toUpperCase()}</th>
                    {renderHeader()}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>{renderItems()}</tbody>
        </table>
    );
}
