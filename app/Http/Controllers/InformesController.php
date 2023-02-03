<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Informe;

class InformesController extends Controller
{
    public function index()
    {
        $informes = Informe::all();

        return $informes;
    }


    public function store(Request $request){

        $informe = Informe::create($request->all());

        return response()->json(['message'=>'Datos guardados correctamente']);

    }

    public function show(Informe $informe)
    {
        return response()->json([
            'informe'=>$informe
        ]);
    }
}
