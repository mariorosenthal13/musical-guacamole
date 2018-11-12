<!DOCTYPE html>
<html lang="en">
<head>
    @include('includes.defaults.head')
</head>
<body class=<?php echo $data['bodyclass']?>>
<!-- PRE LOADER -->
<div id="preloader"></div>
@include('includes.defaults.pageheader')

@yield('content')

@include('includes.defaults.footer')
@include('includes.defaults.scripts')
</body>
</html>