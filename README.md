## BUILD

<h3>1. If you got the error **intalling boost** when run **npx pod-install**</h3>

Go to **node_modules/react-native/third-party-podspecs** from the root of your project

Replace this below content

```bash
# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

Pod::Spec.new do |spec|
  spec.name = 'boost'
  spec.version = '1.76.0'
  spec.license = { :type => 'Boost Software License', :file => "LICENSE_1_0.txt" }
  spec.homepage = 'http://www.boost.org'
  spec.summary = 'Boost provides free peer-reviewed portable C++ source libraries.'
  spec.authors = 'Rene Rivera'
  # spec.source = { :http => 'https://boostorg.jfrog.io/artifactory/main/release/1.76.0/source/boost_1_76_0.tar.bz2',
  spec.source = { :http => 'https://sourceforge.net/projects/boost/files/boost/1.76.0/boost_1_76_0.tar.bz2',
                  :sha256 => 'f0397ba6e982c4450f27bf32a2a83292aba035b827a5623a14636ea583318c41' }

  # Pinning to the same version as React.podspec.
  spec.platforms = { :ios => '11.0' }
  spec.requires_arc = false

  spec.module_name = 'boost'
  spec.header_dir = 'boost'
  spec.preserve_path = 'boost'
end

```

Follow: https://github.com/rvm/rvm/issues/5404#issuecomment-1806701326


<h3>2. If you got the error flipper when run ios</h3>

https://github.com/facebook/react-native/issues/43335#issuecomment-1980176818


<h3>3. Metro not connect</h3>

```
npx react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios
```

<h3>4. Android build error</h3>

```
./gradlew clean
```