import { router } from "@inertiajs/react";
import { useEffect } from "react";

const statusOptions = ["Ordered", "Prepping", "Baking", "Checking", "Ready"];
export default function View({ pizza }) {
    useEffect(function () {
        const interval = setInterval(() => {
            router.reload({
                only: ["pizza"],
            });
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <card className="flex flex-col items-center w-full gap-8 py-3 m-auto text-center border column card bg-slate-200">
            <h3 className="text-3xl font-bold text-sky-900">
                Order #{pizza.id}
            </h3>
            <div class="inline-flex rounded-md shadow-sm">
                {statusOptions.map((option, index) => (
                    <a
                        href="#"
                        aria-current="page"
                        className={`px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:text-white ${
                            pizza.status === option ? "dark:bg-red-800" : ""
                        }`}
                    >
                        {option}
                    </a>
                ))}
            </div>
            <p>
                pizza last update{" "}
                <i className="text-xl font-bold text-indigo-600">
                    {pizza.last_updated}
                </i>{" "}
                by <strong>{pizza.chef}</strong>
            </p>
        </card>
    );
}
