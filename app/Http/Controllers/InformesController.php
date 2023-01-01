<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Informe;

class InformesController extends Controller
{


    public function store(Request $request){

        $informe = Informe::create($request->all());

        return response()->json(['message'=>'Datos guardados correctamente']);

    }
}
