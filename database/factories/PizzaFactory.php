<?php

namespace Database\Factories;

use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pizza>
 */
class PizzaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $toppingChoices = [
            'Extra',
            'Cheese',
            'Pepperoni',
            'Mushrooms',
            'Onions',
            'Sausage',
            'Bacon',
            'Green Peppers',
            'Black Olives',
            'Pineapple',
            'Spinach',
            'Ham',
            'Ground Beef',
            'Jalapeños',
            'Tomatoes',
            'Anchovies'
        ];
        $toppings = [];

        for ($i = 0; $i <= 0; $i++) {
            $toppings[] = Arr::random($toppingChoices);
        }

        $toppings = array_unique($toppings);

        return [
            'id' => rand(1111, 9999),
            'user_id' => rand(1, 10),
            'size' => Arr::random(['Small', 'Medium', 'Large', 'Extra-Large']),
            'crust' => Arr::random(['Normal', 'Sin', 'Garlic']),
            'toppings' => $toppings,
            'status' => Arr::random(['Ordered', 'Prepping', 'Baking', 'Checking', 'Ready']),
        ];
    }
}
