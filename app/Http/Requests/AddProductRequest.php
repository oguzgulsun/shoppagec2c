<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $user = auth()->user();
        return $user->market->sellable==1?true:false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|min:3|max:255',
            'type' => 'required',
        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'Ürün adı zorunlu alandır',
            'name.string' => 'Ürün adı hatalı girilmiştir.',
            'name.min' => 'Ürün adı minimum 3 karakter olmalıdır',
            'name.max' => 'Ürün adı maximum 255 karakter olabilir',
            'type.required' => 'Ürün tipi seçili olmalıdır',
        ];
    }
}
