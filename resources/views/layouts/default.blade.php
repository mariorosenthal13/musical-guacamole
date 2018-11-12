<!DOCTYPE html>
<html lang="en">
<head>
    @include('includes.defaults.head')
</head>
<body class="home">
<!-- PRE LOADER -->
<div id="preloader"></div>

@include('includes.defaults.homeheader')

@yield('content')

@include('includes.defaults.footer')
@include('includes.defaults.scripts')
</body>
</html>
