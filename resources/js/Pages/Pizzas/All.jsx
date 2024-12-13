import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const columns = ["size", "chef", "last_updated", "status"];

export default function All({ auth, pizzas }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Pizza
                </h2>
            }
        >
            <Head title="Pizza" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <Table
                            columns={columns}
                            items={pizzas}
                            primary="Order Number"
                            action="pizzas.edit"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
