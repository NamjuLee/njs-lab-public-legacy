"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92479],{50253:function(e,t,r){r.d(t,{D:function(){return V},b:function(){return z}});var i=r(56424),n=r(14949),o=r(11293),a=r(77312),s=r(452),l=r(76913),c=r(16270),u=r(12803),d=r(6925),h=r(96358),f=r(21091),m=r(54907),p=r(95043),v=r(68835),g=r(59600),_=r(20273),x=r(15836),T=r(22412),b=r(80336),S=r(75148),y=r(37587),w=r(3029),E=r(74437),A=r(65762),C=r(29699),M=r(50165),O=r(94022),R=r(76190),I=r(89539),P=r(55139),N=r(94163),H=r(44525),L=r(1755),D=r(99011),F=r(12701),B=r(4290),U=r(20186);function z(e){let t=new D.kG,{vertex:r,fragment:z,varyings:V}=t;if((0,I.Sv)(r,e),t.include(u.f),V.add("vpos","vec3"),t.include(C.k,e),t.include(l.fQ,e),t.include(p.L,e),t.include(A.av,e),e.output===o.H_.Color){t.include(A.NI,e),t.include(A.R5,e),t.include(A.jF,e),t.include(A.DT,e),(0,I.hY)(r,e),t.include(c.O,e),t.include(s.w,e);let o=e.normalType===c.r.Attribute||e.normalType===c.r.Compressed;o&&e.offsetBackfaces&&t.include(n.w),t.include(g.Q,e),t.include(m.Bb,e),e.instancedColor&&t.attributes.add(U.T.INSTANCECOLOR,"vec4"),V.add("vPositionLocal","vec3"),t.include(h.D,e),t.include(i.qj,e),t.include(d.R,e),t.include(f.c,e),r.uniforms.add(new N.N("externalColor",e=>e.externalColor)),V.add("vcolorExt","vec4"),e.multipassEnabled&&V.add("depth","float"),r.code.add((0,L.H)`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${L.H.float(M.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${o?(0,L.H)`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${o&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `),t.include(a.f5,e),t.include(x.XP,e),t.include(_.K,e),t.include(O.z,e),t.include(e.instancedDoublePrecision?E.hb:E.XE,e),t.include(b.l,e),(0,I.hY)(z,e),z.uniforms.add(r.uniforms.get("localOrigin"),new P.J("ambient",e=>e.ambient),new P.J("diffuse",e=>e.diffuse),new H.p("opacity",e=>e.opacity),new H.p("layerOpacity",e=>e.layerOpacity)),e.hasColorTexture&&z.uniforms.add(new F.A("tex",e=>e.texture)),t.include(w.jV,e),t.include(y.T,e),z.include(R.y),t.include(S.k,e),(0,x.PN)(z),(0,x.sC)(z),(0,T.F1)(z),e.transparencyPassType===B.A.ColorAlpha&&(t.outputs.add("fragColor","vec4",0),t.outputs.add("fragAlpha","float",1)),z.code.add((0,L.H)`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?(0,L.H)`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?(0,L.H)`colorUV`:(0,L.H)`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:(0,L.H)`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===c.r.ScreenDerivative?(0,L.H)`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:(0,L.H)`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===w.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?(0,L.H)`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:(0,L.H)`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?(0,L.H)`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?(0,L.H)`normalUV`:"vuv0"});`:(0,L.H)`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?(0,L.H)`normalize(posWorld);`:(0,L.H)`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?(0,L.H)`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===w.f7.Normal||e.pbrMode===w.f7.Schematic?(0,L.H)`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?(0,L.H)`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:(0,L.H)`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===B.A.ColorAlpha?(0,L.H)`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}
      }
    `)}return t.include(v.s,e),t}let V=Object.freeze(Object.defineProperty({__proto__:null,build:z},Symbol.toStringTag,{value:"Module"}))},71574:function(e,t,r){r.d(t,{R:function(){return F},b:function(){return D}});var i=r(56424),n=r(14949),o=r(11293),a=r(77312),s=r(452),l=r(76913),c=r(16270),u=r(12803),d=r(6925),h=r(96358),f=r(21091),m=r(95043),p=r(68835),v=r(20273),g=r(15836),_=r(22412),x=r(80336),T=r(37587),b=r(3029),S=r(74437),y=r(29699),w=r(50165),E=r(94022),A=r(76190),C=r(89539),M=r(55139),O=r(94163),R=r(44525),I=r(1755),P=r(99011),N=r(12701),H=r(4290),L=r(20186);function D(e){let t=new P.kG,{vertex:r,fragment:D,varyings:F}=t;return(0,C.Sv)(r,e),t.include(u.f),F.add("vpos","vec3"),t.include(y.k,e),t.include(l.fQ,e),t.include(m.L,e),e.output===o.H_.Color&&((0,C.hY)(t.vertex,e),t.include(c.O,e),t.include(s.w,e),e.offsetBackfaces&&t.include(n.w),e.instancedColor&&t.attributes.add(L.T.INSTANCECOLOR,"vec4"),F.add("vNormalWorld","vec3"),F.add("localvpos","vec3"),e.multipassEnabled&&F.add("depth","float"),t.include(h.D,e),t.include(i.qj,e),t.include(d.R,e),t.include(f.c,e),r.uniforms.add(new O.N("externalColor",e=>e.externalColor)),F.add("vcolorExt","vec4"),r.code.add((0,I.H)`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${I.H.float(w.b)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?(0,I.H)`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===o.H_.Color&&(t.include(a.f5,e),t.include(g.XP,e),t.include(v.K,e),t.include(E.z,e),t.include(e.instancedDoublePrecision?S.hb:S.XE,e),t.include(x.l,e),(0,C.hY)(t.fragment,e),(0,_.Pe)(D),(0,g.PN)(D),(0,g.sC)(D),D.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new M.J("ambient",e=>e.ambient),new M.J("diffuse",e=>e.diffuse),new R.p("opacity",e=>e.opacity),new R.p("layerOpacity",e=>e.layerOpacity)),e.hasColorTexture&&D.uniforms.add(new N.A("tex",e=>e.texture)),t.include(b.jV,e),t.include(T.T,e),D.include(A.y),e.transparencyPassType===H.A.ColorAlpha&&(t.outputs.add("fragColor","vec4",0),t.outputs.add("fragAlpha","float",1)),(0,_.F1)(D),D.code.add((0,I.H)`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?(0,I.H)`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?(0,I.H)`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?(0,I.H)`colorUV`:(0,I.H)`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:(0,I.H)`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?(0,I.H)`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:(0,I.H)`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?(0,I.H)`albedo = mix(albedo, vec3(1), 0.9);`:(0,I.H)``}
        ${(0,I.H)`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?e.spherical?(0,I.H)`vec3 normalGround = normalize(vpos + localOrigin);`:(0,I.H)`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:(0,I.H)``}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?(0,I.H)`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?(0,I.H)`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:(0,I.H)`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===H.A.ColorAlpha?(0,I.H)`
                fragColor = premultiplyAlpha(fragColor);
                fragAlpha = fragColor.a;`:""}
      }
    `)),t.include(p.s,e),t}let F=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}))},22038:function(e,t,r){r.d(t,{S:function(){return v},b:function(){return f},g:function(){return m}});var i=r(76827),n=r(24168),o=r(1118),a=r(21037),s=r(63597),l=r(56782),c=r(44525),u=r(1755),d=r(99011),h=r(12701);function f(){let e=new d.kG,t=e.fragment;return e.include(o.k),e.include(s.GZ),t.include(a.K),t.uniforms.add(new c.p("radius",(e,t)=>m(t.camera))).code.add((0,u.H)`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add((0,u.H)`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new h.A("normalMap",e=>e.normalTexture),new h.A("depthMap",e=>e.depthTexture),new c.p("projScale",e=>e.projScale),new h.A("rnm",e=>e.noiseTexture),new l.A("rnmScale",(e,t)=>(0,i.t8)(p,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height)),new c.p("intensity",e=>e.intensity),new l.A("screenSize",(e,t)=>(0,i.t8)(p,t.camera.fullWidth,t.camera.fullHeight))),e.outputs.add("fragOcclusion","float"),t.code.add((0,u.H)`
    void main(void) {
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${u.H.int(16)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${u.H.int(16)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e}function m(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}let p=(0,n.Ue)(),v=Object.freeze(Object.defineProperty({__proto__:null,build:f,getRadius:m},Symbol.toStringTag,{value:"Module"}))},44021:function(e,t,r){r.d(t,{S:function(){return f},b:function(){return h}});var i=r(60964),n=r(1118),o=r(21037),a=r(30003),s=r(44525),l=r(1755),c=r(99011),u=r(61565),d=r(12701);function h(){let e=new c.kG,t=e.fragment;return e.include(n.k),t.include(o.K),t.uniforms.add(new d.A("depthMap",e=>e.depthTexture),new u.R("tex",e=>e.colorTexture),new a.q("blurSize",e=>e.blurSize),new s.p("projScale",(e,t)=>{let r=(0,i.p)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),t.code.add((0,l.H)`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${l.H.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add((0,l.H)`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${l.H.int(4)}; r <= ${l.H.int(4)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}let f=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}))},11752:function(e,t,r){r.d(t,{a:function(){return _},b:function(){return x},c:function(){return p},f:function(){return b},g:function(){return T},j:function(){return A},n:function(){return N}}),r(37180),r(65223);var i=r(13507),n=r(94807),o=r(60964),a=r(82955),s=r(91870),l=r(40465),c=r(77584),u=r(37436),d=r(48350),h=r(14157),f=r(53524);let m=p();function p(){return(0,l.Ue)()}let v=s.e,g=s.e;function _(e,t){return(0,s.c)(t,e)}function x(e){return e[3]}function T(e){return e}function b(e,t,r,i){return(0,l.al)(e,t,r,i)}function S(e,t,r){if(null==t||!w(e,t,y))return!1;let{t0:i,t1:n}=y;if((i<0||n<i&&n>0)&&(i=n),i<0)return!1;if(r){let{origin:e,direction:n}=t;r[0]=e[0]+n[0]*i,r[1]=e[1]+n[1]*i,r[2]=e[2]+n[2]*i}return!0}let y={t0:0,t1:0};function w(e,t,r){let{origin:i,direction:n}=t;E[0]=i[0]-e[0],E[1]=i[1]-e[1],E[2]=i[2]-e[2];let o=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];if(0===o)return!1;let a=2*(n[0]*E[0]+n[1]*E[1]+n[2]*E[2]),s=a*a-4*o*(E[0]*E[0]+E[1]*E[1]+E[2]*E[2]-e[3]*e[3]);if(s<0)return!1;let l=Math.sqrt(s);return r.t0=(-a-l)/(2*o),r.t1=(-a+l)/(2*o),!0}let E=(0,a.Ue)();function A(e,t){return S(e,t,null)}function C(e,t,r){let i=f.WM.get(),a=f.MP.get();(0,o.b)(i,t.origin,t.direction);let s=x(e);(0,o.b)(r,i,t.origin),(0,o.j)(r,r,1/(0,o.l)(r)*s);let l=O(e,t.origin),c=(0,h.EU)(t.origin,r);return(0,n.Us)(a,c+l,i),(0,o.h)(r,r,a),r}function M(e,t,r){let i=(0,o.f)(f.WM.get(),t,T(e)),n=(0,o.j)(f.WM.get(),i,e[3]/(0,o.l)(i));return(0,o.g)(r,n,T(e))}function O(e,t){let r=(0,o.f)(f.WM.get(),t,T(e)),n=(0,o.l)(r),a=x(e);return(0,i.ZF)(a/(a+Math.abs(a-n)))}let R=(0,a.Ue)();function I(e,t,r,n){let a=(0,o.f)(R,t,T(e));switch(r){case u.R.X:{let e=(0,i.jE)(a,R)[2];return(0,o.s)(n,-Math.sin(e),Math.cos(e),0)}case u.R.Y:{let e=(0,i.jE)(a,R),t=e[1],r=e[2],s=Math.sin(t);return(0,o.s)(n,-s*Math.cos(r),-s*Math.sin(r),Math.cos(t))}case u.R.Z:return(0,o.n)(n,a);default:return}}function P(e,t){let r=(0,o.f)(H,t,T(e));return(0,o.l)(r)-e[3]}function N(e,t){let r=(0,o.a)(T(e),t),i=x(e);return r<=i*i}let H=(0,a.Ue)(),L=p();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:m,altitudeAt:P,angleToSilhouette:O,axisAt:I,clear:function(e){e[0]=e[1]=e[2]=e[3]=0},closestPoint:function(e,t,r){return S(e,t,r)?r:((0,d.JI)(t,T(e),r),M(e,r,r))},closestPointOnSilhouette:C,containsPoint:N,copy:_,create:p,distanceToSilhouette:function(e,t){let r=(0,o.f)(f.WM.get(),t,T(e));return Math.sqrt(Math.abs((0,o.q)(r)-e[3]*e[3]))},elevate:function(e,t,r){return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),r[3]=e[3]+t,r},equals:g,exactEquals:v,fromCenterAndRadius:function(e,t){return(0,l.al)(e[0],e[1],e[2],t)},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},fromValues:b,getCenter:T,getRadius:x,intersectLine:function(e,t,r){let i=(0,d.zk)(t,r);if(!w(e,i,y))return[];let{origin:n,direction:s}=i,{t0:l,t1:u}=y,h=t=>{let r=(0,a.Ue)();return(0,o.r)(r,n,s,t),M(e,r,r)};return Math.abs(l-u)<(0,c.bn)()?[h(l)]:[h(l),h(u)]},intersectRay:S,intersectRayClosestSilhouette:function(e,t,r){if(S(e,t,r))return r;let i=C(e,t,f.WM.get());return(0,o.g)(r,t.origin,(0,o.j)(f.WM.get(),t.direction,(0,o.p)(t.origin,i)/(0,o.l)(t.direction))),r},intersectsRay:A,projectPoint:M,setAltitudeAt:function(e,t,r,i){let n=P(e,t),a=I(e,t,u.R.Z,H),s=(0,o.j)(H,a,r-n);return(0,o.g)(i,t,s)},setExtent:function(e,t,r){return e!==r&&_(e,r),r},tmpSphere:L,union:function(e,t,r=(0,l.Ue)()){let i=(0,o.p)(T(e),T(t)),n=e[3],a=t[3];return i+a<n?(0,s.c)(r,e):i+n<a?(0,s.c)(r,t):((0,o.o)(r,T(e),T(t),(i+a-n)/(2*i)),r[3]=(i+n+a)/2),r},wrap:function(e){return e}},Symbol.toStringTag,{value:"Module"}))},17514:function(e,t,r){function i(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(e,t,r,i=3,n=i){if(e.length/i!==Math.ceil(t.length/n))return e;let o=e.length/i,a=r[0],s=r[1],l=r[2],c=r[4],u=r[5],d=r[6],h=r[8],f=r[9],m=r[10],p=r[12],v=r[13],g=r[14],_=0,x=0;for(let r=0;r<o;r++){let r=t[_],o=t[_+1],T=t[_+2];e[x]=a*r+c*o+h*T+p,e[x+1]=s*r+u*o+f*T+v,e[x+2]=l*r+d*o+m*T+g,_+=n,x+=i}return e}function o(e,t,r){a(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function a(e,t,r,i=3,n=i){if(e.length/i!==Math.ceil(t.length/n))return;let o=e.length/i,a=r[0],s=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],m=r[8],p=0,v=0;for(let r=0;r<o;r++){let r=t[p],o=t[p+1],g=t[p+2];e[v]=a*r+c*o+h*g,e[v+1]=s*r+u*o+f*g,e[v+2]=l*r+d*o+m*g,p+=n,v+=i}}function s(e,t,r){l(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function l(e,t,r,i=3,n=i){let o=Math.min(e.length/i,t.length/n),a=0,s=0;for(let l=0;l<o;l++)e[s]=r*t[a],e[s+1]=r*t[a+1],e[s+2]=r*t[a+2],a+=n,s+=i;return e}function c(e,t,r,i=3,n=i){let o=e.length/i;if(o!==Math.ceil(t.length/n))return e;let a=0,s=0;for(let l=0;l<o;l++)e[s]=t[a]+r[0],e[s+1]=t[a+1]+r[1],e[s+2]=t[a+2]+r[2],a+=n,s+=i;return e}function u(e,t){d(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function d(e,t,r=3,i=r){let n=Math.min(e.length/r,t.length/i),o=0,a=0;for(let s=0;s<n;s++){let n=t[o],s=t[o+1],l=t[o+2],c=n*n+s*s+l*l;if(c>0){let t=1/Math.sqrt(c);e[a]=t*n,e[a+1]=t*s,e[a+2]=t*l}o+=i,a+=r}}r.d(t,{a:function(){return n},b:function(){return c},c:function(){return o},d:function(){return i},e:function(){return u},f:function(){return s},n:function(){return d},s:function(){return l},t:function(){return a}}),r(37180),r(65223),Object.freeze(Object.defineProperty({__proto__:null,normalize:d,normalizeView:u,scale:l,scaleView:s,shiftRight:function(e,t,r){let i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride,l=0,c=0;for(let e=0;e<i;e++)n[c]=a[l]>>r,n[c+1]=a[l+1]>>r,n[c+2]=a[l+2]>>r,l+=s,c+=o},transformMat3:a,transformMat3View:o,transformMat4:n,transformMat4View:i,translate:c},Symbol.toStringTag,{value:"Module"}))},96243:function(e,t,r){r.d(t,{r:function(){return i}});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){let i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){let r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach((t,r)=>e(t,r))}}},48632:function(e,t,r){r.d(t,{x:function(){return n}});var i=r(33975);class n{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.Y)(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){let e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,o));e++)this._items.push(this._allocator())}}let o=1024},68872:function(e,t,r){r.d(t,{G:function(){return n}});var i=r(94605);let n=class e{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){let t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new i.Z(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new e(this.major,this.minor,this._context)}static parse(t,r=""){let[n,o]=t.split("."),a=/^\s*\d+\s*$/;if(!n?.match||!a.test(n))throw new i.Z((r&&r+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!o?.match||!a.test(o))throw new i.Z((r&&r+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});return new e(parseInt(n,10),parseInt(o,10),r)}}},28960:function(e,t,r){function i(e){return e=e||globalThis.location.hostname,c.some(t=>null!=e?.match(t))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(o)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{XO:function(){return i},pJ:function(){return n}});let o=/^devext\.arcgis\.com$/,a=/^qaext\.arcgis\.com$/,s=/^[\w-]*\.mapsdevext\.arcgis\.com$/,l=/^[\w-]*\.mapsqa\.arcgis\.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,o,a,/^jsapps\.esri\.com$/,s,l]},96450:function(e,t,r){r.d(t,{xx:function(){return n}});var i=r(13677);function n(e,t=!1){return e<=i.c8?t?Array(e).fill(0):Array(e):new Float32Array(e)}},20911:function(e,t,r){r.d(t,{$z:function(){return o},KF:function(){return c},mi:function(){return n}});var i=r(13677);function n(e){var t;if((0,i.kJ)(e)){if(e.length<i.c8)return e}else if(e.length<i.c8)return Array.from(e);let r=!0,n=!0;return e.some((e,t)=>(r=r&&0===e,n=n&&e===t,!r&&!n)),r?1===(t=e.length)?s:t<i.c8?Array(t).fill(0):(t>u.length&&(u=new Uint8Array(Math.max(2*u.length,t))),new Uint8Array(u.buffer,0,t)):n?c(e.length):(0,i.kJ)(e)||e.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?function(e){let t=!0;for(let r of e){if(r>=65536)return(0,i.kJ)(e)?new Uint32Array(e):e;r>=256&&(t=!1)}return t?new Uint8Array(e):new Uint16Array(e)}(e):e}function o(e){return e<=i.c8?Array(e):e<=65536?new Uint16Array(e):new Uint32Array(e)}let a=(()=>{let e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})(),s=[0],l=(()=>{let e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function c(e){if(1===e)return s;if(e<i.c8)return Array.from(new Uint16Array(l.buffer,0,e));if(e<l.length)return new Uint16Array(l.buffer,0,e);if(e>a.length){a=new Uint32Array(Math.max(2*a.length,e));for(let e=0;e<a.length;e++)a[e]=e}return new Uint32Array(a.buffer,0,e)}let u=new Uint8Array(65536)},30379:function(e,t,r){r.d(t,{Ue:function(){return l},nF:function(){return u},zk:function(){return c}});var i=r(13507),n=r(48632),o=r(60964),a=r(82955),s=r(53524);function l(e){return e?{origin:(0,a.d9)(e.origin),vector:(0,a.d9)(e.vector)}:{origin:(0,a.Ue)(),vector:(0,a.Ue)()}}function c(e,t,r=l()){return(0,o.c)(r.origin,e),(0,o.f)(r.vector,t,e),r}function u(e,t,r){return function(e,t,r,n,a){let{vector:l,origin:c}=e,u=(0,o.f)(s.WM.get(),t,c),d=(0,o.m)(l,u)/(0,o.q)(l);return(0,o.j)(a,l,(0,i.uZ)(d,0,1)),(0,o.g)(a,a,e.origin)}(e,t,0,0,r)}(0,a.Ue)(),(0,a.Ue)(),new n.x(()=>l())},48350:function(e,t,r){r.d(t,{JI:function(){return u},Ue:function(){return a},re:function(){return l},zk:function(){return c}}),r(78628);var i=r(48632),n=r(60964),o=r(82955);function a(e){return e?s((0,o.d9)(e.origin),(0,o.d9)(e.direction)):s((0,o.Ue)(),(0,o.Ue)())}function s(e,t){return{origin:e,direction:t}}function l(e,t){let r=d.get();return r.origin=e,r.direction=t,r}function c(e,t,r=a()){return(0,n.c)(r.origin,e),(0,n.f)(r.direction,t,e),r}function u(e,t,r){let i=(0,n.m)(e.direction,(0,n.f)(r,t,e.origin));return(0,n.g)(r,e.origin,(0,n.j)(r,e.direction,i)),r}r(53524);let d=new i.x(()=>a());(0,o.Ue)()},2856:function(e,t,r){r.d(t,{t:function(){return n}});var i=r(54748);async function n(e,t){let{data:r}=await (0,i.Z)(e,{responseType:"image",...t});return r}},92479:function(e,t,r){let i;r.d(t,{fetch:function(){return t8}});var n,o,a,s,l,c,u=r(28960),d=r(13507),h=r(15514),f=r(25607),m=r(94807),p=r(77244),v=r(24168),g=r(60964),_=r(82955),x=r(54053),T=r(96450),b=r(12287),S=r(17514),y=r(81383),w=r(72756),E=r(57798),A=r(14327),C=r(70126),M=r(62750),O=r(35518),R=r(10582),I=r(6977);function P(e){if(null==e)return null;let t=null!=e.offset?e.offset:I.AG,r=null!=e.rotation?e.rotation:0,i=null!=e.scale?e.scale:I.hq,n=(0,f.al)(1,0,0,0,1,0,t[0],t[1],1),o=(0,f.al)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),a=(0,f.al)(i[0],0,0,0,i[1],0,0,0,1),s=(0,f.Ue)();return(0,h.Jp)(s,o,a),(0,h.Jp)(s,n,s),s}class N{constructor(){this.geometries=[],this.materials=[],this.textures=[]}}class H{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new N,this.numberOfVertices=0}}var L=r(54748),D=r(27817),F=r(53182),B=r(94605),U=r(65223),z=r(96243),V=r(31124),G=r(68872),W=r(20911),j=r(2856),q=r(96556),k=r(73295),$=r(13677),J=r(35313),Y=r(26158);class X{constructor(e,t,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.position=r,this._children=void 0,(0,Y.hu)(e.length>=1),(0,Y.hu)(3===r.size||4===r.size);let{data:i,size:n,indices:o}=r;(0,Y.hu)(o.length%this._numIndexPerPrimitive==0),(0,Y.hu)(o.length>=e.length*this._numIndexPerPrimitive);let a=e.length,s=n*o[this._numIndexPerPrimitive*e[0]];Z.clear(),Z.push(s);let l=(0,_.al)(i[s],i[s+1],i[s+2]),c=(0,_.d9)(l);for(let t=0;t<a;++t){let r=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){s=n*o[r+e],Z.push(s);let t=i[s];l[0]=Math.min(t,l[0]),c[0]=Math.max(t,c[0]),t=i[s+1],l[1]=Math.min(t,l[1]),c[1]=Math.max(t,c[1]),t=i[s+2],l[2]=Math.min(t,l[2]),c[2]=Math.max(t,c[2])}}this.bbMin=l,this.bbMax=c;let u=(0,g.o)((0,_.Ue)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(c[0]-l[0],c[1]-l[1]),c[2]-l[2]);let d=this.radius*this.radius;for(let e=0;e<Z.length;++e){let t=i[s=Z.at(e)]-u[0],r=i[s+1]-u[1],n=i[s+2]-u[2],o=t*t+r*r+n*n;if(o<=d)continue;let a=Math.sqrt(o),l=.5*(a-this.radius);this.radius=this.radius+l,d=this.radius*this.radius;let c=l/a;u[0]+=t*c,u[1]+=r*c,u[2]+=n*c}this.center=u,Z.clear()}getChildren(){if(this._children||1>=(0,g.a)(this.bbMin,this.bbMax))return this._children;let e=(0,g.o)((0,_.Ue)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=Array(8);for(let e=0;e<8;++e)i[e]=0;let{data:n,size:o,indices:a}=this.position;for(let s=0;s<t;++s){let t=0,l=this._numIndexPerPrimitive*this.primitiveIndices[s],c=o*a[l],u=n[c],d=n[c+1],h=n[c+2];for(let e=1;e<this._numIndexPerPrimitive;++e){let t=n[c=o*a[l+e]],r=n[c+1],i=n[c+2];t<u&&(u=t),r<d&&(d=r),i<h&&(h=i)}u<e[0]&&(t|=1),d<e[1]&&(t|=2),h<e[2]&&(t|=4),r[s]=t,++i[t]}let s=0;for(let e=0;e<8;++e)i[e]>0&&++s;if(s<2)return;let l=Array(8);for(let e=0;e<8;++e)l[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){let t=r[e];l[t][i[t]++]=this.primitiveIndices[e]}this._children=[];for(let e=0;e<8;++e)void 0!==l[e]&&this._children.push(new X(l[e],this._numIndexPerPrimitive,this.position));return this._children}static prune(){Z.prune()}}let Z=new J.Z({deallocator:null});var K=r(86345),Q=r(56996),ee=r(48632),et=r(30379);r(53524),new ee.x(et.Ue),new ee.x(()=>({p0:(0,_.Ue)(),p1:(0,_.Ue)(),p2:(0,_.Ue)()}));let er=(0,_.Ue)(),ei=(0,_.Ue)(),en=(0,_.Ue)(),eo=(0,_.Ue)(),ea=(0,_.Ue)(),es=(0,_.Ue)();var el=r(38017);class ec{constructor(e){this.channel=e,this.id=(0,el.D)()}}var eu=r(20186);r(83630),(0,_.Ue)(),new Float32Array(6);class ed extends K.c{constructor(e,t,r=null,i=Q.U.Mesh,n=null,o=-1){for(let[a,s]of(super(),this.material=e,this.mapPositions=r,this.type=i,this.objectAndLayerIdColor=n,this.edgeIndicesLength=o,this.visible=!0,this._attributes=new Map,this._boundingInfo=null,t))this._attributes.set(a,{...s,indices:(0,W.mi)(s.indices)}),a===eu.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(a).indices.length:this.edgeIndicesLength)}instantiate(e={}){let t=new ed(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((e,r)=>{e.exclusive=!1,t._attributes.set(r,e)}),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:function(e){if(e.length<$.c8)return Array.from(e);if((0,$.kJ)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,$.Uc)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){let r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){let e=this._attributes.values().next().value.indices;return e?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===Q.U.Mesh?this._computeAttachmentOriginTriangles(e):this.type===Q.U.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&(0,g.h)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){return function(e,t){if(!e)return!1;let{size:r,data:i,indices:n}=e;(0,g.s)(t,0,0,0),(0,g.s)(es,0,0,0);let o=0,a=0;for(let e=0;e<n.length-2;e+=3){let s=n[e]*r,l=n[e+1]*r,c=n[e+2]*r;(0,g.s)(en,i[s],i[s+1],i[s+2]),(0,g.s)(eo,i[l],i[l+1],i[l+2]),(0,g.s)(ea,i[c],i[c+1],i[c+2]);let u=((0,g.f)(er,eo,en),(0,g.f)(ei,ea,en),.5*(0,g.l)((0,g.b)(er,er,ei)));u?((0,g.g)(en,en,eo),(0,g.g)(en,en,ea),(0,g.j)(en,en,1/3*u),(0,g.g)(t,t,en),o+=u):((0,g.g)(es,es,en),(0,g.g)(es,es,eo),(0,g.g)(es,es,ea),a+=3)}return(0!==a||0!==o)&&(0!==o?((0,g.j)(t,t,1/o),!0):0!==a&&((0,g.j)(t,es,1/a),!0))}(this.attributes.get(eu.T.POSITION),e)}_computeAttachmentOriginLines(e){var t;let r=this.attributes.get(eu.T.POSITION);return function(e,t,r){if(!e)return!1;(0,g.s)(r,0,0,0),(0,g.s)(es,0,0,0);let i=0,n=0,{size:o,data:a,indices:s}=e,l=s.length-1,c=l+(t?2:0);for(let e=0;e<c;e+=2){let t=e<l?e+1:0,c=s[e<l?e:l]*o,u=s[t]*o;en[0]=a[c],en[1]=a[c+1],en[2]=a[c+2],eo[0]=a[u],eo[1]=a[u+1],eo[2]=a[u+2],(0,g.j)(en,(0,g.g)(en,en,eo),.5);let d=(0,g.F)(en,eo);d>0?((0,g.g)(r,r,(0,g.j)(en,en,d)),i+=d):0===i&&((0,g.g)(es,es,en),n++)}return 0!==i?((0,g.j)(r,r,1/i),!0):0!==n&&((0,g.j)(r,es,1/n),!0)}(r,!(!("isClosed"in(t=this.material.parameters))||!t.isClosed)&&r.indices.length>2,e)}_computeAttachmentOriginPoints(e){return function(e,t){if(!e)return!1;let{size:r,data:i,indices:n}=e;(0,g.s)(t,0,0,0);let o=-1,a=0;for(let e=0;e<n.length;e++){let s=n[e]*r;o!==s&&(t[0]+=i[s],t[1]+=i[s+1],t[2]+=i[s+2],a++),o=s}return a>1&&(0,g.j)(t,t,1/a),a>0}(this.attributes.get(eu.T.POSITION),e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){let e=this.attributes.get(eu.T.POSITION);if(!e||0===e.indices.length)return null;let t=this.type===Q.U.Mesh?3:1;return(0,Y.hu)(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t),new X((0,W.KF)(e.indices.length/t),t,e)}get transformation(){return this._transformation??p.Wd}set transformation(e){this._transformation=e&&e!==p.Wd?(0,p.d9)(e):null}addHighlight(){var e;let t=new ec(k.V_.Highlight);return this.highlights=(null==(e=this.highlights)&&(e=[]),e.push(t),e),t}removeHighlight(e){this.highlights=function(e,t){if(null==e)return null;let r=e.filter(e=>e!==t);return 0===r.length?null:r}(this.highlights,e)}}var eh=r(37180),ef=r(60163),em=r(36152),ep=r(72659),ev=r(56736),eg=r(99547);(n=s||(s={}))[n.ETC1_RGB=0]="ETC1_RGB",n[n.ETC2_RGBA=1]="ETC2_RGBA",n[n.BC1_RGB=2]="BC1_RGB",n[n.BC3_RGBA=3]="BC3_RGBA",n[n.BC4_R=4]="BC4_R",n[n.BC5_RG=5]="BC5_RG",n[n.BC7_M6_RGB=6]="BC7_M6_RGB",n[n.BC7_M5_RGBA=7]="BC7_M5_RGBA",n[n.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",n[n.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",n[n.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",n[n.ATC_RGB=11]="ATC_RGB",n[n.ATC_RGBA=12]="ATC_RGBA",n[n.FXT1_RGB=17]="FXT1_RGB",n[n.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",n[n.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",n[n.ETC2_EAC_R11=20]="ETC2_EAC_R11",n[n.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",n[n.RGBA32=13]="RGBA32",n[n.RGB565=14]="RGB565",n[n.BGR565=15]="BGR565",n[n.RGBA4444=16]="RGBA4444";var e_=r(71193),ex=r(15809),eT=r(4548);let eb=null,eS=null;async function ey(){return null==eS&&(eS=i??=(async()=>{let e=await r.e(30925).then(r.bind(r,30925)),t=await e.default({locateFile:e=>(0,eg.V)(`esri/libs/basisu/${e}`)});return t.initializeBasis(),t})(),eb=await eS),eS}function ew(e,t,r,i,n){return Math.ceil(r*i*(0,eT.RG)(t?e_.q_.COMPRESSED_RGBA8_ETC2_EAC:e_.q_.COMPRESSED_RGB8_ETC2)*(n&&e>1?(4**e-1)/(3*4**(e-1)):1))}function eE(e){return e.getNumImages()>=1&&!e.isUASTC()}function eA(e){return e.getFaces()>=1&&e.isETC1S()}async function eC(e,t,r){null==eb&&(eb=await ey());let i=new eb.BasisFile(new Uint8Array(r));if(!eE(i))return null;i.startTranscoding();let n=eO(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(e,t)=>i.getImageTranscodedSizeInBytes(0,e,t),(e,t,r)=>i.transcodeImage(r,0,e,t,0,0));return i.close(),i.delete(),n}async function eM(e,t,r){null==eb&&(eb=await ey());let i=new eb.KTX2File(new Uint8Array(r));if(!eA(i))return null;i.startTranscoding();let n=eO(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t),(e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1));return i.close(),i.delete(),n}function eO(e,t,r,i,n,o,a,l){let{compressedTextureETC:c,compressedTextureS3TC:u}=e.capabilities,[d,h]=c?i?[s.ETC2_RGBA,e_.q_.COMPRESSED_RGBA8_ETC2_EAC]:[s.ETC1_RGB,e_.q_.COMPRESSED_RGB8_ETC2]:u?i?[s.BC3_RGBA,e_.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[s.BC1_RGB,e_.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[s.RGBA32,e_.VI.RGBA],f=t.hasMipmap?r:Math.min(1,r),m=[];for(let e=0;e<f;e++)m.push(new Uint8Array(a(e,d))),l(e,d,m[e]);return t.internalFormat=h,t.hasMipmap=m.length>1,t.samplingMode=t.hasMipmap?e_.cw.LINEAR_MIPMAP_LINEAR:e_.cw.LINEAR,t.width=n,t.height=o,new ex.x(e,t,{type:"compressed",levels:m})}let eR=()=>U.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function eI(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}let eP=eI("DXT1"),eN=eI("DXT3"),eH=eI("DXT5");function eL(e,t,r){if(e instanceof ImageData)return eL(eD(e),t,r);let i=document.createElement("canvas");return i.width=t,i.height=r,i.getContext("2d").drawImage(e,0,0,i.width,i.height),i}function eD(e){let t=document.createElement("canvas");t.width=e.width,t.height=e.height;let r=t.getContext("2d");if(null==r)throw new B.Z("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}var eF=r(66897);class eB extends K.c{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=Q.U.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new ef.Z,this._parameters={...ez,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,ep.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";let t=!e.paused;if(e.src=e.src,t&&e.autoplay){let t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,ep.HK)(e.src)||(0,ep.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){let t=new eF.X;return t.wrapMode=this._parameters.wrap??e_.e8.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?e_.cw.LINEAR_MIPMAP_LINEAR:e_.cw.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||function(e,t){if(null==e)return 0;if((0,$.eP)(e)||(0,$.lq)(e))return t.encoding===k.Ti.KTX2_ENCODING?function(e,t){if(null==eb)return e.byteLength;let r=new eb.KTX2File(new Uint8Array(e)),i=eA(r)?ew(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):t.encoding===k.Ti.BASIS_ENCODING?function(e,t){if(null==eb)return e.byteLength;let r=new eb.BasisFile(new Uint8Array(e)),i=eE(r)?ew(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):e.byteLength;let{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?eU(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;let t=this._data;return null==t?(this._glTexture=new ex.x(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):((0,$.eP)(t)||(0,$.lq)(t))&&this._parameters.encoding===k.Ti.DDS_ENCODING?this._loadFromDDSData(e,t):((0,$.eP)(t)||(0,$.lq)(t))&&this._parameters.encoding===k.Ti.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,$.eP)(t)||(0,$.lq)(t))&&this._parameters.encoding===k.Ti.BASIS_ENCODING?this._loadFromBasis(e,t):(0,$.lq)(t)?this._loadFromPixelData(e,t):(0,$.eP)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<l.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){let i=function(e,t){let r,i,n;let o=new Int32Array(e,0,31);if(542327876!==o[0])return eR().error("Invalid magic number in DDS header"),null;if(!(4&o[20]))return eR().error("Unsupported format, must contain a FourCC code"),null;let a=o[21];switch(a){case eP:r=8,i=e_.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case eN:r=16,i=e_.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case eH:r=16,i=e_.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return eR().error("Unsupported FourCC code:",String.fromCharCode(255&a,a>>8&255,a>>16&255,a>>24&255)),null}let s=1,l=o[4],c=o[3];(3&l||3&c)&&(eR().warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,c=c+3&-4);let u=l,d=c;131072&o[2]&&!1!==t&&(s=Math.max(1,o[7]));let h=o[1]+4,f=[];for(let t=0;t<s;++t)f.push(new Uint8Array(e,h,n=(l+3>>2)*(c+3>>2)*r)),h+=n,l=Math.max(1,l>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:f},internalFormat:i,width:u,height:d}}(r,t.hasMipmap??!1);if(null==i)throw Error("DDS texture data is null");let{textureData:n,internalFormat:o,width:a,height:s}=i;return t.samplingMode=n.levels.length>1?e_.cw.LINEAR_MIPMAP_LINEAR:e_.cw.LINEAR,t.hasMipmap=n.levels.length>1,t.internalFormat=o,t.width=a,t.height=s,new ex.x(e,t,n)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync(()=>eM(e,this._createDescriptor(e),t).then(e=>(this._glTexture=e,e)))}_loadFromBasis(e,t){return this._loadAsync(()=>eC(e,this._createDescriptor(e),t).then(e=>(this._glTexture=e,e)))}_loadFromPixelData(e,t){(0,Y.hu)(this._parameters.width>0&&this._parameters.height>0);let r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?e_.VI.LUMINANCE:3===this._parameters.components?e_.VI.RGB:e_.VI.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new ex.x(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync(async r=>{let i=await (0,j.t)(t,{signal:r});return(0,V.k_)(r),this._loadFromImage(e,i)})}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync(async r=>{let i=await (0,ev.fY)(t,t.src,!1,r);return(0,V.k_)(r),this._loadFromImage(e,i)})}_loadFromVideoElement(e,t){return t.readyState>=l.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync(r=>new Promise((i,n)=>{let o=()=>{t.removeEventListener("loadeddata",a),t.removeEventListener("error",s),(0,em.hw)(c)},a=()=>{t.readyState>=l.HAVE_CURRENT_DATA&&(o(),i(this._loadFromImage(e,t)))},s=e=>{o(),n(e||new B.Z("Failed to load video"))};t.addEventListener("loadeddata",a),t.addEventListener("error",s);let c=(0,V.fu)(r,()=>s((0,V.zE)()))}))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){let{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?function(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?eD(e):e;let i=e.width,n=e.height;do r=(i=Math.ceil(i/2))*(n=Math.ceil(n/2));while(r>1048576||null!=t&&(i>t||n>t));return eL(e,i,n)}(r,t):function(e,t){let r=Math.max(e.width,e.height);if(r<=t)return e;let i=t/r;return eL(e,Math.round(e.width*i),Math.round(e.height*i))}(r,t)}let i=eU(r);this._parameters.width=i.width,this._parameters.height=i.height;let n=this._createDescriptor(e);return n.pixelFormat=3===this._parameters.components?e_.VI.RGB:e_.VI.RGBA,n.width=i.width,n.height=i.height,this._glTexture=new ex.x(e,n,r),this._glTexture}_loadAsync(e){let t=new AbortController;this._loadingController=t;let r=e(t.signal);this._loadingPromise=r;let i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}unload(){if(this._glTexture=(0,em.M2)(this._glTexture),null!=this._loadingController){let e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function eU(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}(o=l||(l={}))[o.HAVE_NOTHING=0]="HAVE_NOTHING",o[o.HAVE_METADATA=1]="HAVE_METADATA",o[o.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",o[o.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",o[o.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";let ez={wrap:{s:e_.e8.REPEAT,t:e_.e8.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};var eV=r(33516),eG=r(77043),eW=r(11293),ej=r(16270),eq=r(75148),ek=r(3029),e$=r(36970),eJ=r(87865),eY=r(4290),eX=r(44163);let eZ=(0,eX.wK)(e_.zi.SRC_ALPHA,e_.zi.ONE,e_.zi.ONE_MINUS_SRC_ALPHA,e_.zi.ONE_MINUS_SRC_ALPHA),eK=(0,eX.wK)(e_.zi.ONE,e_.zi.ZERO,e_.zi.ONE,e_.zi.ONE_MINUS_SRC_ALPHA),eQ={factor:-1,units:-2};class e0{constructor(e=!1,t=!0){this.isVerticalRay=e,this.normalRequired=t}}let e1=(0,x.Ue)(),e2=(0,_.Ue)(),e3=(0,_.Ue)(),e5=(0,_.Ue)(),e4=(0,_.Ue)(),e6=(0,_.Ue)(),e7=(0,_.Ue)(),e8=(0,_.Ue)(),e9=(0,_.Ue)(),te=[(0,_.Ue)(),(0,_.Ue)(),(0,_.Ue)()];(a=c||(c={}))[a.INTEGRATED_MESH=0]="INTEGRATED_MESH",a[a.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",a[a.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",a[a.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",a[a.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",a[a.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",a[a.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",a[a.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",a[a.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",a[a.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",a[a.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",a[a.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",a[a.OPAQUE_ENVIRONMENT=12]="OPAQUE_ENVIRONMENT",a[a.TRANSPARENT_ENVIRONMENT=13]="TRANSPARENT_ENVIRONMENT",a[a.LASERLINES=14]="LASERLINES",a[a.LASERLINES_CONTRAST_CONTROL=15]="LASERLINES_CONTRAST_CONTROL",a[a.HUD_MATERIAL=16]="HUD_MATERIAL",a[a.LABEL_MATERIAL=17]="LABEL_MATERIAL",a[a.LINE_CALLOUTS=18]="LINE_CALLOUTS",a[a.LINE_CALLOUTS_HUD_DEPTH=19]="LINE_CALLOUTS_HUD_DEPTH",a[a.DRAPED_MATERIAL=20]="DRAPED_MATERIAL",a[a.DRAPED_WATER=21]="DRAPED_WATER",a[a.VIEWSHED=22]="VIEWSHED",a[a.VOXEL=23]="VOXEL",a[a.MAX_SLOTS=24]="MAX_SLOTS";var tt=r(11752),tr=r(46068);class ti{constructor(e=0){this.offset=e,this.tmpVertex=(0,_.Ue)()}applyToVertex(e,t,r){let i=(0,g.s)(ts,e,t,r),n=(0,g.g)(tl,i,this.localOrigin),o=this.offset/(0,g.l)(n);return(0,g.r)(this.tmpVertex,i,n,o),this.tmpVertex}applyToAabb(e){for(let t=0;t<3;++t)tc[t]=e[0+t]+this.localOrigin[t],tu[t]=e[3+t]+this.localOrigin[t],td[t]=tc[t];let t=this.applyToVertex(tc[0],tc[1],tc[2]);for(let r=0;r<3;++r)e[r]=t[r],e[r+3]=t[r];let r=t=>{let r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=Math.min(e[t],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let t=0;t<3;++t)td[t]=e&1<<t?tu[t]:tc[t];r(td)}let i=0;for(let e=0;e<3;++e)tc[e]*tu[e]<0&&(i|=1<<e);if(0!==i&&7!==i){for(let e=0;e<8;++e)if(!(i&e)){for(let t=0;t<3;++t)td[t]=i&1<<t?0:e&1<<t?tc[t]:tu[t];r(td)}}for(let t=0;t<3;++t)e[t]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}}class tn{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,_.Ue)(),this._tmpMbs=(0,tt.c)(),this._tmpObb=new tr.Oo,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,g.l)(e)}applyToVertex(e,t,r){let i=(0,g.s)(ts,e,t,r),n=(0,g.s)(tl,e,t,r+this.componentLocalOriginLength),o=this._totalOffset/(0,g.l)(n);return(0,g.r)(this._tmpVertex,i,n,o),this._tmpVertex}applyToAabb(e){let t=this.componentLocalOriginLength,r=e[0],i=e[1],n=e[2]+t,o=e[3],a=e[4],s=e[5]+t,l=Math.abs(r),c=Math.abs(i),u=Math.abs(n),d=Math.abs(o),h=Math.abs(a),f=Math.abs(s),m=.5*(1+Math.sign(r*o))*Math.min(l,d),p=.5*(1+Math.sign(i*a))*Math.min(c,h),v=.5*(1+Math.sign(n*s))*Math.min(u,f),g=Math.max(l,d),_=Math.max(c,h),x=Math.max(u,f),T=Math.sqrt(m*m+p*p+v*v),b=Math.sign(l+r),S=Math.sign(c+i),y=Math.sign(u+n),w=Math.sign(d+o),E=Math.sign(h+a),A=Math.sign(f+s),C=this._totalOffset;if(T<C)return e[0]-=(1-b)*C,e[1]-=(1-S)*C,e[2]-=(1-y)*C,e[3]+=w*C,e[4]+=E*C,e[5]+=A*C,e;let M=C/Math.sqrt(g*g+_*_+x*x),O=C/T,R=O-M,I=-R;return e[0]+=r*(b*I+O),e[1]+=i*(S*I+O),e[2]+=n*(y*I+O),e[3]+=o*(w*R+M),e[4]+=a*(E*R+M),e[5]+=s*(A*R+M),e}applyToMbs(e){let t=(0,g.l)((0,tt.g)(e)),r=this._totalOffset/t;return(0,g.r)((0,tt.g)(this._tmpMbs),(0,tt.g)(e),(0,tt.g)(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return(0,tr.gI)(e,this._totalOffset,this._totalOffset,eV.JY.Global,this._tmpObb),this._tmpObb}}class to{constructor(e=0){this.offset=e,this.sphere=(0,tt.c)(),this.tmpVertex=(0,_.Ue)()}applyToVertex(e,t,r){let i=this.objectTransform.transform,n=(0,g.s)(ts,e,t,r),o=(0,g.h)(n,n,i),a=this.offset/(0,g.l)(o);(0,g.r)(o,o,o,a);let s=this.objectTransform.inverse;return(0,g.h)(this.tmpVertex,o,s),this.tmpVertex}applyToMinMax(e,t){let r=this.offset/(0,g.l)(e);(0,g.r)(e,e,e,r);let i=this.offset/(0,g.l)(t);(0,g.r)(t,t,t,i)}applyToAabb(e){let t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;let r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){let t=(0,g.l)((0,tt.g)(e)),r=this.offset/t;return(0,g.r)((0,tt.g)(this.sphere),(0,tt.g)(e),(0,tt.g)(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}}let ta=new to;new tn,new ti;let ts=(0,_.Ue)(),tl=(0,_.Ue)(),tc=(0,_.Ue)(),tu=(0,_.Ue)(),td=(0,_.Ue)();function th(e,t,r){let{data:i,indices:n}=e,o=t.typedBuffer,a=t.typedBufferStride,s=n.length;r*=a;for(let e=0;e<s;++e){let t=2*n[e];o[r]=i[t],o[r+1]=i[t+1],r+=a}}function tf(e,t,r,i){let{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,l=o.length;if(r*=s,null==i||1===i)for(let e=0;e<l;++e){let t=3*o[e];a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],r+=s}else for(let e=0;e<l;++e){let t=3*o[e];for(let e=0;e<i;++e)a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],r+=s}}function tm(e,t,r,i=1){let{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,l=o.length;if(r*=s,1===i)for(let e=0;e<l;++e){let t=4*o[e];a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],a[r+3]=n[t+3],r+=s}else for(let e=0;e<l;++e){let t=4*o[e];for(let e=0;e<i;++e)a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],a[r+3]=n[t+3],r+=s}}class tp{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(eu.T.POSITION).indices.length}write(e,t,r,i,n){!function(e,t,r,i,n,o){for(let a of t.fields.keys()){let t=e.attributes.get(a),s=t?.indices;if(t&&s)!function(e,t,r,i,n,o){switch(e){case eu.T.POSITION:{(0,Y.hu)(3===t.size);let i=n.getField(e,b.ct);(0,Y.hu)(!!i,`No buffer view for ${e}`),i&&function(e,t,r,i,n=1){if(!t)return void tf(e,r,i,n);let{data:o,indices:a}=e,s=r.typedBuffer,l=r.typedBufferStride,c=a.length,u=t[0],d=t[1],h=t[2],f=t[4],p=t[5],v=t[6],g=t[8],_=t[9],x=t[10],T=t[12],b=t[13],S=t[14];i*=l;let y=0,w=0,E=0,A=(0,m.lv)(t)?e=>{y=o[e]+T,w=o[e+1]+b,E=o[e+2]+S}:e=>{let t=o[e],r=o[e+1],i=o[e+2];y=u*t+f*r+g*i+T,w=d*t+p*r+_*i+b,E=h*t+v*r+x*i+S};if(1===n)for(let e=0;e<c;++e)A(3*a[e]),s[i]=y,s[i+1]=w,s[i+2]=E,i+=l;else for(let e=0;e<c;++e){A(3*a[e]);for(let e=0;e<n;++e)s[i]=y,s[i+1]=w,s[i+2]=E,i+=l}}(t,r,i,o);break}case eu.T.NORMAL:{(0,Y.hu)(3===t.size);let r=n.getField(e,b.ct);(0,Y.hu)(!!r,`No buffer view for ${e}`),r&&function(e,t,r,i,n=1){if(!t)return void tf(e,r,i,n);let{data:o,indices:a}=e,s=r.typedBuffer,l=r.typedBufferStride,c=a.length,u=t[0],d=t[1],h=t[2],f=t[4],p=t[5],v=t[6],g=t[8],_=t[9],x=t[10],T=!(0,m.pV)(t);i*=l;let b=0,S=0,y=0,w=(0,m.lv)(t)?e=>{b=o[e],S=o[e+1],y=o[e+2]}:e=>{let t=o[e],r=o[e+1],i=o[e+2];b=u*t+f*r+g*i,S=d*t+p*r+_*i,y=h*t+v*r+x*i};if(1===n){if(T)for(let e=0;e<c;++e){w(3*a[e]);let t=b*b+S*S+y*y;if(t<.999999&&t>1e-6){let e=1/Math.sqrt(t);s[i]=b*e,s[i+1]=S*e,s[i+2]=y*e}else s[i]=b,s[i+1]=S,s[i+2]=y;i+=l}else for(let e=0;e<c;++e)w(3*a[e]),s[i]=b,s[i+1]=S,s[i+2]=y,i+=l}else for(let e=0;e<c;++e){if(w(3*a[e]),T){let e=b*b+S*S+y*y;if(e<.999999&&e>1e-6){let t=1/Math.sqrt(e);b*=t,S*=t,y*=t}}for(let e=0;e<n;++e)s[i]=b,s[i+1]=S,s[i+2]=y,i+=l}}(t,i,r,o);break}case eu.T.NORMALCOMPRESSED:{(0,Y.hu)(2===t.size);let r=n.getField(e,b.or);(0,Y.hu)(!!r,`No buffer view for ${e}`),r&&th(t,r,o);break}case eu.T.UV0:{(0,Y.hu)(2===t.size);let r=n.getField(e,b.Eu);(0,Y.hu)(!!r,`No buffer view for ${e}`),r&&th(t,r,o);break}case eu.T.COLOR:case eu.T.SYMBOLCOLOR:{let r=n.getField(e,b.mc);(0,Y.hu)(!!r,`No buffer view for ${e}`),(0,Y.hu)(3===t.size||4===t.size),r&&(3===t.size||4===t.size)&&function(e,t,r,i,n=1){let{data:o,indices:a}=e,s=r.typedBuffer,l=r.typedBufferStride,c=a.length;if(i*=l,t!==o.length||4!==t){if(1!==n){if(4!==t)for(let e=0;e<c;++e){let t=3*a[e];for(let e=0;e<n;++e)s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=255,i+=l}else for(let e=0;e<c;++e){let t=4*a[e];for(let e=0;e<n;++e)s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=o[t+3],i+=l}}else{if(4===t){for(let e=0;e<c;++e){let t=4*a[e];s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=o[t+3],i+=l}return}for(let e=0;e<c;++e){let t=3*a[e];s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=255,i+=l}}}else{s[i]=o[0],s[i+1]=o[1],s[i+2]=o[2],s[i+3]=o[3];let e=new Uint32Array(r.typedBuffer.buffer,r.start),t=l/4,a=e[i/=4];i+=t;let u=c*n;for(let r=1;r<u;++r)e[i]=a,i+=t}}(t,t.size,r,o);break}case eu.T.COLORFEATUREATTRIBUTE:{let r=n.getField(e,b.ly);(0,Y.hu)(!!r,`No buffer view for ${e}`),(0,Y.hu)(1===t.size),r&&1===t.size&&function(e,t,r){let{data:i,indices:n}=e,o=t.typedBuffer,a=t.typedBufferStride,s=n.length,l=i[0];r*=a;for(let e=0;e<s;++e)o[r]=l,r+=a}(t,r,o);break}case eu.T.TANGENT:{(0,Y.hu)(4===t.size);let i=n.getField(e,b.ek);(0,Y.hu)(!!i,`No buffer view for ${e}`),i&&function(e,t,r,i,n=1){if(!t)return void tm(e,r,i,n);let{data:o,indices:a}=e,s=r.typedBuffer,l=r.typedBufferStride,c=a.length,u=t[0],d=t[1],h=t[2],f=t[4],p=t[5],v=t[6],g=t[8],_=t[9],x=t[10],T=!(0,m.pV)(t);if(i*=l,1===n)for(let e=0;e<c;++e){let t=4*a[e],r=o[t],n=o[t+1],c=o[t+2],m=o[t+3],b=u*r+f*n+g*c,S=d*r+p*n+_*c,y=h*r+v*n+x*c;if(T){let e=b*b+S*S+y*y;if(e<.999999&&e>1e-6){let t=1/Math.sqrt(e);b*=t,S*=t,y*=t}}s[i]=b,s[i+1]=S,s[i+2]=y,s[i+3]=m,i+=l}else for(let e=0;e<c;++e){let t=4*a[e],r=o[t],c=o[t+1],m=o[t+2],b=o[t+3],S=u*r+f*c+g*m,y=d*r+p*c+_*m,w=h*r+v*c+x*m;if(T){let e=S*S+y*y+w*w;if(e<.999999&&e>1e-6){let t=1/Math.sqrt(e);S*=t,y*=t,w*=t}}for(let e=0;e<n;++e)s[i]=S,s[i+1]=y,s[i+2]=w,s[i+3]=b,i+=l}}(t,r,i,o);break}case eu.T.PROFILERIGHT:case eu.T.PROFILEUP:case eu.T.PROFILEVERTEXANDNORMAL:case eu.T.FEATUREVALUE:{(0,Y.hu)(4===t.size);let r=n.getField(e,b.ek);(0,Y.hu)(!!r,`No buffer view for ${e}`),r&&tm(t,r,o)}}}(a,t,r,i,n,o);else if(a===eu.T.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){let t=e.attributes.get(eu.T.POSITION)?.indices;if(t){let r=t.length,i=n.getField(a,b.mc);!function(e,t,r,i,n=1){let o=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===n)for(let t=0;t<r;++t)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a;else for(let t=0;t<r;++t)for(let t=0;t<n;++t)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a}(e.objectAndLayerIdColor,i,r,o)}}}}(r,this.vertexBufferLayout,e,t,i,n)}}var tv=r(24031),tg=r(40465),t_=r(96358),tx=r(54907),tT=r(50165),tb=r(10769),tS=r(53152),ty=r(68940),tw=r(93109);e_.wb.LESS,e_.wb.ALWAYS;let tE={mask:255},tA={function:{func:e_.wb.ALWAYS,ref:k.hU.OutlineVisualElementMask,mask:k.hU.OutlineVisualElementMask},operation:{fail:e_.xS.KEEP,zFail:e_.xS.KEEP,zPass:e_.xS.ZERO}},tC={function:{func:e_.wb.ALWAYS,ref:k.hU.OutlineVisualElementMask,mask:k.hU.OutlineVisualElementMask},operation:{fail:e_.xS.KEEP,zFail:e_.xS.KEEP,zPass:e_.xS.REPLACE}};e_.wb.EQUAL,k.hU.OutlineVisualElementMask,k.hU.OutlineVisualElementMask,e_.xS.KEEP,e_.xS.KEEP,e_.xS.KEEP,e_.wb.NOTEQUAL,k.hU.OutlineVisualElementMask,k.hU.OutlineVisualElementMask,e_.xS.KEEP,e_.xS.KEEP,e_.xS.KEEP;let tM=[1,1,.5],tO=[0,.6,.2],tR=[0,1,.2];var tI=r(50253);class tP extends tx.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,_.nI)(tM),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=k.Vr.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,_.al)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=ej.r.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,_.al)(.2,.2,.2),this.diffuse=(0,_.al)(.8,.8,.8),this.externalColor=(0,tg.al)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,_.Ue)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=k.Gv.Less,this.textureAlphaMode=k.JJ.Blend,this.textureAlphaCutoff=tT.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=eJ.yD.Occlude,this.isDecoration=!1}}class tN extends tS.A{initializeConfiguration(e,t){t.spherical=e.viewingMode===eV.JY.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?t_.N.Default:t_.N.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,tN.shader)}_initializeProgram(e,t){return new tw.$(e.rctx,t.get().build(this.configuration),ty.i)}_makePipeline(e,t){let r=this.configuration,i=e===eY.A.NONE,n=e===eY.A.FrontFace;return(0,eX.sm)({blending:r.output===eW.H_.Color&&r.transparent?i?eZ:e===eY.A.FrontFace?null:eK:null,culling:r.cullFace===k.Vr.None&&(r.hasSlicePlane||r.transparent||r.doubleSidedMode)?null:(0,eX.zp)(r.cullFace),depthTest:{func:function(e,t=e_.wb.LESS){return e===eY.A.NONE||e===eY.A.FrontFace?t:e_.wb.LEQUAL}(e,r.customDepthTest===k.Gv.Lequal?e_.wb.LEQUAL:e_.wb.LESS)},depthWrite:(i||n)&&r.writeDepth?eX.LZ:null,drawBuffers:r.output===eW.H_.Depth?{buffers:[e_.Xg.NONE]}:e===eY.A.ColorAlpha?{buffers:[e_.VY.COLOR_ATTACHMENT0,e_.VY.COLOR_ATTACHMENT1]}:null,colorWrite:eX.BK,stencilWrite:r.hasOccludees?tE:null,stencilTest:r.hasOccludees?t?tC:tA:null,polygonOffset:i||n?null:r.enableOffset?eQ:null})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}tN.shader=new tb.J(tI.D,()=>r.e(42466).then(r.bind(r,42466)));var tH=r(86641),tL=r(86624),tD=r(76913),tF=r(20002);class tB extends tD.PO{}(0,tH._)([(0,tL.o)({constValue:!0})],tB.prototype,"hasSliceHighlight",void 0),(0,tH._)([(0,tL.o)({constValue:!1})],tB.prototype,"hasSliceInVertexProgram",void 0),(0,tH._)([(0,tL.o)({constValue:tF.P.Pass})],tB.prototype,"pbrTextureBindType",void 0);class tU extends tB{constructor(){super(...arguments),this.output=eW.H_.Color,this.alphaDiscardMode=k.JJ.Opaque,this.doubleSidedMode=eq.q.None,this.pbrMode=ek.f7.Disabled,this.cullFace=k.Vr.None,this.transparencyPassType=eY.A.NONE,this.normalType=ej.r.Attribute,this.textureCoordinateType=t_.N.None,this.customDepthTest=k.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,tH._)([(0,tL.o)({count:eW.H_.COUNT})],tU.prototype,"output",void 0),(0,tH._)([(0,tL.o)({count:k.JJ.COUNT})],tU.prototype,"alphaDiscardMode",void 0),(0,tH._)([(0,tL.o)({count:eq.q.COUNT})],tU.prototype,"doubleSidedMode",void 0),(0,tH._)([(0,tL.o)({count:ek.f7.COUNT})],tU.prototype,"pbrMode",void 0),(0,tH._)([(0,tL.o)({count:k.Vr.COUNT})],tU.prototype,"cullFace",void 0),(0,tH._)([(0,tL.o)({count:eY.A.COUNT})],tU.prototype,"transparencyPassType",void 0),(0,tH._)([(0,tL.o)({count:ej.r.COUNT})],tU.prototype,"normalType",void 0),(0,tH._)([(0,tL.o)({count:t_.N.COUNT})],tU.prototype,"textureCoordinateType",void 0),(0,tH._)([(0,tL.o)({count:k.Gv.COUNT})],tU.prototype,"customDepthTest",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"spherical",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasVertexColors",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasSymbolColors",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasVerticalOffset",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasSlicePlane",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasSliceHighlight",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasColorTexture",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasMetallicRoughnessTexture",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasEmissionTexture",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasOcclusionTexture",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasNormalTexture",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasScreenSizePerspective",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasVertexTangents",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasOccludees",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"multipassEnabled",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasModelTransformation",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"offsetBackfaces",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"vvSize",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"vvColor",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"receiveShadows",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"receiveAmbientOcclusion",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"textureAlphaPremultiplied",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"instanced",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"instancedColor",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"objectAndLayerIdColorInstanced",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"instancedDoublePrecision",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"writeDepth",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"transparent",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"enableOffset",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"cullAboveGround",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"snowCover",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasColorTextureTransform",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasEmissionTextureTransform",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasNormalTextureTransform",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasOcclusionTextureTransform",void 0),(0,tH._)([(0,tL.o)()],tU.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,tH._)([(0,tL.o)({constValue:!1})],tU.prototype,"occlusionPass",void 0),(0,tH._)([(0,tL.o)({constValue:!0})],tU.prototype,"hasVvInstancing",void 0),(0,tH._)([(0,tL.o)({constValue:!1})],tU.prototype,"useCustomDTRExponentForWater",void 0),(0,tH._)([(0,tL.o)({constValue:!1})],tU.prototype,"supportsTextureAtlas",void 0),(0,tH._)([(0,tL.o)({constValue:!0})],tU.prototype,"useFillLights",void 0);var tz=r(71574);class tV extends tN{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=ej.r.Attribute,t.doubleSidedMode=eq.q.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,tV.shader)}}tV.shader=new tb.J(tz.R,()=>r.e(60057).then(r.bind(r,60057)));class tG extends eJ.F5{constructor(e){super(e,tq),this.supportsEdges=!0,this.produces=new Map([[c.OPAQUE_MATERIAL,e=>((0,eW.Jb)(e)||(0,eW.Kr)(e))&&!this.parameters.transparent],[c.TRANSPARENT_MATERIAL,e=>((0,eW.Jb)(e)||(0,eW.Kr)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[c.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>((0,eW.Jb)(e)||(0,eW.Kr)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new tU,this._vertexBufferLayout=function(e){let t=(0,eG.U$)().vec3f(eu.T.POSITION);return e.normalType===ej.r.Compressed?t.vec2i16(eu.T.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(eu.T.NORMAL),e.hasVertexTangents&&t.vec4f(eu.T.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(eu.T.UV0),e.hasVertexColors&&t.vec4u8(eu.T.COLOR),e.hasSymbolColors&&t.vec4u8(eu.T.SYMBOLCOLOR),(0,eh.Z)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(eu.T.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==eW.H_.Shadow&&e!==eW.H_.ShadowExcludeHighlight&&e!==eW.H_.ShadowHighlight||this.parameters.castShadows}isVisible(){let e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;let{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:i,vvColor:n}=e,o="replace"===e.colorMixMode,a=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||n||i;return r&&l?o||a:r?o?s:a:l?o||a:o?s:a}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?k.Vr.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e===eW.H_.Color&&(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=eq.q.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?eq.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?eq.q.WindingOrder:eq.q.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?ek.f7.Schematic:ek.f7.Normal:ek.f7.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<5e5,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,i,n,o){var a;if(null!=this.parameters.verticalOffset){let e=r.camera;(0,g.s)(tZ,t[12],t[13],t[14]);let o=null;switch(r.viewingMode){case eV.JY.Global:o=(0,g.n)(tY,tZ);break;case eV.JY.Local:o=(0,g.c)(tY,tJ)}let a=0,s=(0,g.f)(tK,tZ,e.eye),l=(0,g.l)(s),c=(0,g.j)(s,s,1/l),u=null;this.parameters.screenSizePerspective&&(u=(0,g.m)(o,c)),a+=(0,tv.Hx)(e,l,this.parameters.verticalOffset,u??0,this.parameters.screenSizePerspective),(0,g.j)(o,o,a),(0,g.t)(tX,o,r.transform.inverseRotation),i=(0,g.f)(tk,i,tX),n=(0,g.f)(t$,n,tX)}!function(e,t,r,i,n,o){if(!e.visible)return;let a=(0,g.z)(e9,i,r),s=(e,t,r)=>{o(e,r,t,!1)},l=new e0(!1,t.options.normalRequired);if(e.boundingInfo){(0,Y.hu)(e.type===Q.U.Mesh);let i=t.tolerance;!function e(t,r,i,n,o,a,s){if(null==t)return;let l=(0,g.s)(e2,1/i[0],1/i[1],1/i[2]);if((0,x.op)(e1,t.bbMin),(0,x.Tn)(e1,t.bbMax),null!=o&&o.applyToAabb(e1),function(e,t,r,i,n){let o=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0],s=Math.min(o,a),l=Math.max(o,a),c=(e[1]-i-t[1])*r[1],u=(e[4]+i-t[1])*r[1];if((l=Math.min(l,Math.max(c,u)))<0||(s=Math.max(s,Math.min(c,u)))>l)return!1;let d=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return!((l=Math.min(l,Math.max(d,h)))<0)&&!((s=Math.max(s,Math.min(d,h)))>l)&&s<n}(e1,r,l,n,1/0)){let{primitiveIndices:l,position:c}=t,u=l?l.length:c.indices.length/3;if(u>1e3){let l=t.getChildren();if(void 0!==l){for(let t of l)e(t,r,i,n,o,a,s);return}}!function(e,t,r,i,n,o,a,s,l,c,u){let d=e[0],h=e[1],f=e[2],m=t[0],p=t[1],v=t[2],{normalRequired:_}=c;for(let e=0;e<i;++e){let t=s[e],r=3*t,i=a*n[r],c=o[i],x=o[i+1],T=o[i+2],b=a*n[r+1],S=o[b],y=o[b+1],w=o[b+2],E=a*n[r+2],A=o[E],C=o[E+1],M=o[E+2];null!=l&&([c,x,T]=l.applyToVertex(c,x,T,e),[S,y,w]=l.applyToVertex(S,y,w,e),[A,C,M]=l.applyToVertex(A,C,M,e));let O=S-c,R=y-x,I=w-T,P=A-c,N=C-x,H=M-T,L=p*H-N*v,D=v*P-H*m,F=m*N-P*p,B=O*L+R*D+I*F;if(1e-7>=Math.abs(B))continue;let U=d-c,z=h-x,V=f-T,G=U*L+z*D+V*F;if(B>0){if(G<0||G>B)continue}else if(G>0||G<B)continue;let W=z*I-R*V,j=V*O-I*U,q=U*R-O*z,k=m*W+p*j+v*q;if(B>0){if(k<0||G+k>B)continue}else if(k>0||G+k<B)continue;let $=(P*W+N*j+H*q)/B;$>=0&&u($,t,_?((0,g.s)(e7,O,R,I),(0,g.s)(e8,P,N,H),(0,g.b)(e3,e7,e8),(0,g.n)(e3,e3),e3):null)}}(r,i,0,u,c.indices,c.data,c.stride,l,o,a,s)}}(e.boundingInfo,r,a,i,n,l,s)}else{let t=e.attributes.get(eu.T.POSITION),i=t.indices;!function(e,t,r,i,n,o,a,s,l,c){let u=Math.abs(t[0]),d=Math.abs(t[1]),h=Math.abs(t[2]),f=u>=d?u>=h?0:2:d>=h?1:2,m=t[f]<0?2:1,p=(f+m)%3,v=(f+(3-m))%3,_=t[p]/t[f],x=t[v]/t[f],T=1/t[f],{normalRequired:b}=l;for(let t=0;t<i;++t){let r=3*t,i=a*n[r];(0,g.s)(te[0],o[i+0],o[i+1],o[i+2]);let l=a*n[r+1];(0,g.s)(te[1],o[l+0],o[l+1],o[l+2]);let u=a*n[r+2];(0,g.s)(te[2],o[u+0],o[u+1],o[u+2]),s&&((0,g.c)(te[0],s.applyToVertex(te[0][0],te[0][1],te[0][2],t)),(0,g.c)(te[1],s.applyToVertex(te[1][0],te[1][1],te[1][2],t)),(0,g.c)(te[2],s.applyToVertex(te[2][0],te[2][1],te[2][2],t))),(0,g.z)(e5,te[0],e),(0,g.z)(e4,te[1],e),(0,g.z)(e6,te[2],e);let d=e5[p]-_*e5[f],h=e5[v]-x*e5[f],m=e4[p]-_*e4[f],S=e4[v]-x*e4[f],y=e6[p]-_*e6[f],w=e6[v]-x*e6[f],E=y*S-w*m,A=d*w-h*y,C=m*h-S*d;if((E<0||A<0||C<0)&&(E>0||A>0||C>0))continue;let M=E+A+C;if(0===M)continue;let O=T*e5[f]*E+T*e4[f]*A+T*e6[f]*C;if(O*Math.sign(M)<0)continue;let R=O/M;R>=0&&c(R,t,b?((0,g.z)(e7,te[1],te[0]),(0,g.z)(e8,te[2],te[0]),(0,g.b)(e3,e7,e8),(0,g.n)(e3,e3),e3):null)}}(r,a,0,i.length/3,i,t.data,t.stride,n,l,s)}}(e,r,i,n,null!=(a=r.verticalOffset)?(ta.offset=a,ta):null,o)}createGLMaterial(e){return new tW(e)}createBufferWriter(){return new tp(this._vertexBufferLayout)}}class tW extends e$.F{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output===eW.H_.Color&&(this._updateShadowState(e),this._updateOccludeeState(e));let t=this._material.parameters;this.updateTexture(t.textureId);let r=e.camera.viewInverseTransposeMatrix;return(0,g.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?tV:tN,e)}}class tj extends tP{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}let tq=new tj,tk=(0,_.Ue)(),t$=(0,_.Ue)(),tJ=(0,_.al)(0,0,1),tY=(0,_.Ue)(),tX=(0,_.Ue)(),tZ=(0,_.Ue)(),tK=(0,_.Ue)(),tQ=()=>U.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function t0(e,t){let r=await t1(e,t),i=await t5(r.textureDefinitions??{},t),n=0;for(let e in i)if(i.hasOwnProperty(e)){let t=i[e];n+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:i,size:n+(0,F.Ul)(r)}}async function t1(e,t){let r=t?.streamDataRequester;if(r)return t2(e,r,t);let i=await (0,D.q6)((0,L.Z)(e,t));if(!0===i.ok)return i.value.data;(0,V.r9)(i.error),t3(i.error)}async function t2(e,t,r){let i=await (0,D.q6)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,V.r9)(i.error),t3(i.error.details.url)}function t3(e){throw new B.Z("",`Request for object resource failed: ${e}`)}async function t5(e,t){let r=[];for(let i in e){let n=e[i],o=n.images[0].data;if(!o){tQ().warn("Externally referenced texture data is not yet supported");continue}let a=n.encoding+";base64,"+o,s="/textureDefinitions/"+i,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:e_.e8.REPEAT,t:e_.e8.REPEAT},preMultiplyAlpha:t4(l)!==k.JJ.Opaque},u=t?.disableTextures?Promise.resolve(null):(0,j.t)(a,t);r.push(u.then(e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l})))}let i=await Promise.all(r),n={};for(let e of i)n[e.refId]=e;return n}function t4(e){switch(e){case"mask":return k.JJ.Mask;case"maskAndTransparency":return k.JJ.MaskBlend;case"none":return k.JJ.Opaque;default:return k.JJ.Blend}}let t6=new G.G(1,2,"wosr");var t7=r(47666);async function t8(e,t){let r=function(e){let t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}((0,u.pJ)(e));if("wosr"===r.fileType){let{engineResources:e,referenceBoundingBox:i}=function(e,t){let r=[],i=[],n=[],o=new z.r,a=e.resource,s=G.G.parse(a.version||"1.0","wosr");t6.validate(s);let l=a.model.name,c=a.model.geometries,u=a.materialDefinitions??{},d=e.textures,h=0,f=new Map;for(let e=0;e<c.length;e++){let a=c[e];if(!function(e){let t=e.params,r=t.topology,i=!0;switch(t.vertexAttributes||(tQ().warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{let e=t.faces;if(e){if(t.vertexAttributes)for(let r in t.vertexAttributes){let t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(tQ().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(tQ().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(tQ().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else tQ().warn("Indexed geometries must specify faces"),i=!1;break}default:tQ().warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(tQ().warn("Geometry requires material"),i=!1);let n=e.params.vertexAttributes;for(let e in n)n[e].values||(tQ().warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}(a))continue;let s=function(e){let t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}(a),l=a.params.vertexAttributes,m=[],p=e=>{if("PerAttributeArray"===a.params.topology)return null;let t=a.params.faces;for(let r in t)if(r===e)return t[r].values;return null},v=l[eu.T.POSITION],g=v.values.length/v.valuesPerElement;for(let e in l){let t=l[e],r=t.values,i=p(e)??(0,W.KF)(g);m.push([e,new q.a(r,i,t.valuesPerElement,!0)])}let x=s.texture,T=d&&d[x];if(T&&!f.has(x)){let{image:e,parameters:t}=T,r=new eB(e,t);i.push(r),f.set(x,r)}let b=f.get(x),S=b?b.id:void 0,y=s.material,w=o.get(y,x);if(null==w){let e=u[y.substring(y.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);let r=T&&T.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,n=T?t4(T.alphaChannelUsage):void 0,a={ambient:(0,_.nI)(e.diffuse),diffuse:(0,_.nI)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:S,initTextureTransparent:!0,doubleSided:!0,cullFace:k.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:T?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(a,t.materialParameters),w=new tG(a),o.set(y,x,w)}n.push(w);let E=new ed(w,m);h+=m.find(e=>e[0]===eu.T.POSITION)?.[1]?.indices.length??0,r.push(E)}return{engineResources:[{name:l,stageResources:{textures:i,materials:n,geometries:r},pivotOffset:a.model.pivotOffset,numberOfVertices:h,lodThreshold:null}],referenceBoundingBox:function(e){let t=(0,x.cS)();return e.forEach(e=>{let r=e.boundingInfo;null!=r&&((0,x.pp)(t,r.bbMin),(0,x.pp)(t,r.bbMax))}),t}(r)}}(await (t.cache?t.cache.loadWOSR(r.url,t):t0(r.url,t)),t);return{lods:e,referenceBoundingBox:i,isEsriSymbolResource:!1,isWosr:!0}}let i=await (t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):(0,M.Q)(new C.C(t.streamDataRequester),r.url,t,t.usePBR)),n=i.model.meta?.ESRI_proxyEllipsoid,o=i.meta.isEsriSymbolResource&&null!=n&&"EsriRealisticTreesStyle"===i.meta.ESRI_webstyle;o&&!i.customMeta.esriTreeRendering&&(i.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r)for(let i of e.model.lods[r].parts){let n=i.attributes.normal;if(null==n)return;let o=i.attributes.position,a=o.count,s=(0,_.Ue)(),l=(0,_.Ue)(),c=(0,_.Ue)(),u=new Uint8Array(4*a),d=new Float64Array(3*a),h=(0,m.U_)((0,p.Ue)(),i.transform),f=0,v=0;for(let m=0;m<a;m++){o.getVec(m,l),n.getVec(m,s),(0,g.h)(l,l,i.transform),(0,g.f)(c,l,t.center),(0,g.D)(c,c,t.radius);let a=c[2],p=(0,g.l)(c),_=Math.min(.45+.55*p*p,1);(0,g.D)(c,c,t.radius),null!==h&&(0,g.h)(c,c,h),(0,g.n)(c,c),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,g.o)(c,c,s,a>-1?.2:Math.min(-4*a-3.8,1)),d[f]=c[0],d[f+1]=c[1],d[f+2]=c[2],f+=3,u[v]=255*_,u[v+1]=255*_,u[v+2]=255*_,u[v+3]=255,v+=4}i.attributes.normal=new b.ct(d),i.attributes.color=new b.mc(u)}}(i,n));let a=!!t.usePBR,s=i.meta.isEsriSymbolResource?{usePBR:a,isSchematic:!1,treeRendering:o,mrrFactors:[...tR]}:{usePBR:a,isSchematic:!1,treeRendering:!1,mrrFactors:[...tM]},{engineResources:l,referenceBoundingBox:c}=function(e,t,r,i){let n=e.model,o=[],a=new Map,s=new Map,l=n.lods.length,c=(0,x.cS)();return n.lods.forEach((e,u)=>{let f=!0===i.skipHighLods&&(l>1&&0===u||l>3&&1===u)||!1===i.skipHighLods&&null!=i.singleLodIndex&&u!==i.singleLodIndex;if(f&&0!==u)return;let m=new H(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach(e=>{let i=f?new tG({}):function(e,t,r,i,n,o,a){let s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),l=e.materials.get(t.material),c=null!=t.attributes.texCoord0,u=null!=t.attributes.normal;if(null==l)return null;let d=function(e){switch(e){case"BLEND":return k.JJ.Blend;case"MASK":return k.JJ.Mask;case"OPAQUE":case null:case void 0:return k.JJ.Opaque}}(l.alphaMode);if(!o.has(s)){if(c){let t=(t,r=!1)=>{if(null!=t&&!a.has(t)){let i=e.textures.get(t);if(null!=i){let e=i.data;a.set(t,new eB((0,R.$A)(e)?e.data:e,{...i.parameters,preMultiplyAlpha:!(0,R.$A)(e)&&r,encoding:(0,R.$A)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(l.textureColor,d!==k.JJ.Opaque),t(l.textureNormal),t(l.textureOcclusion),t(l.textureEmissive),t(l.textureMetallicRoughness)}let r=l.color[0]**(1/t7.j),h=l.color[1]**(1/t7.j),f=l.color[2]**(1/t7.j),m=l.emissiveFactor[0]**(1/t7.j),p=l.emissiveFactor[1]**(1/t7.j),x=l.emissiveFactor[2]**(1/t7.j),T=null!=l.textureColor&&c?a.get(l.textureColor):null,b=function({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:i,emissiveTexture:n,emissiveFactor:o,occlusionTexture:a}){return null==e&&null==t&&null==n&&(null==o||(0,g.e)(o,_.AG))&&null==a&&(null==i||1===i)&&(null==r||1===r)}({normalTexture:l.textureNormal,metallicRoughnessTexture:l.textureMetallicRoughness,metallicFactor:l.metallicFactor,roughnessFactor:l.roughnessFactor,emissiveTexture:l.textureEmissive,emissiveFactor:l.emissiveFactor,occlusionTexture:l.textureOcclusion}),S=null!=l.normalTextureTransform?.scale?l.normalTextureTransform?.scale:v.hq;o.set(s,new tG({...i,transparent:d===k.JJ.Blend,customDepthTest:k.Gv.Lequal,textureAlphaMode:d,textureAlphaCutoff:l.alphaCutoff,diffuse:[r,h,f],ambient:[r,h,f],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?k.Vr.None:k.Vr.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:u?ej.r.Attribute:ej.r.ScreenDerivative,castShadows:!0,receiveShadows:l.receiveShadows,receiveAmbientOcclusion:l.receiveAmbientOcclustion,textureId:null!=T?T.id:void 0,colorMixMode:l.colorMixMode,normalTextureId:null!=l.textureNormal&&c?a.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:null!=T&&!!T.parameters.preMultiplyAlpha,occlusionTextureId:null!=l.textureOcclusion&&c?a.get(l.textureOcclusion).id:void 0,emissiveTextureId:null!=l.textureEmissive&&c?a.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=l.textureMetallicRoughness&&c?a.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[m,p,x],mrrFactors:b?[...tO]:[l.metallicFactor,l.roughnessFactor,i.mrrFactors[2]],isSchematic:b,colorTextureTransformMatrix:P(l.colorTextureTransform),normalTextureTransformMatrix:P(l.normalTextureTransform),scale:[S[0],S[1]],occlusionTextureTransformMatrix:P(l.occlusionTextureTransform),emissiveTextureTransformMatrix:P(l.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:P(l.metallicRoughnessTextureTransform),...n}))}let h=o.get(s);if(r.stageResources.materials.push(h),c){let e=e=>{null!=e&&r.stageResources.textures.push(a.get(e))};e(l.textureColor),e(l.textureNormal),e(l.textureOcclusion),e(l.textureEmissive),e(l.textureMetallicRoughness)}return h}(n,e,m,t,r,a,s),{geometry:o,vertexCount:l}=function(e,t){let r=e.attributes.position.count,i=(0,O.p)(e.indices||r,e.primitiveType),n=(0,T.xx)(3*r),{typedBuffer:o,typedBufferStride:a}=e.attributes.position;(0,S.a)(n,o,e.transform,3,a);let s=[[eu.T.POSITION,new q.a(n,i,3,!0)]];if(null!=e.attributes.normal){let t=(0,T.xx)(3*r),{typedBuffer:n,typedBufferStride:o}=e.attributes.normal;(0,h.XL)(t9,e.transform),(0,S.t)(t,n,t9,3,o),(0,d.oc)(t9)&&(0,S.n)(t,t),s.push([eu.T.NORMAL,new q.a(t,i,3,!0)])}if(null!=e.attributes.tangent){let t=(0,T.xx)(4*r),{typedBuffer:n,typedBufferStride:o}=e.attributes.tangent;(0,h.xO)(t9,e.transform),(0,y.t)(t,n,t9,4,o),(0,d.oc)(t9)&&(0,S.n)(t,t,4),s.push([eu.T.TANGENT,new q.a(t,i,4,!0)])}if(null!=e.attributes.texCoord0){let t=(0,T.xx)(2*r),{typedBuffer:n,typedBufferStride:o}=e.attributes.texCoord0;(0,w.n)(t,n,2,o),s.push([eu.T.UV0,new q.a(t,i,2,!0)])}let l=e.attributes.color;if(null!=l){let t=new Uint8Array(4*r);4===l.elementCount?l instanceof b.ek?(0,y.s)(t,l,255):l instanceof b.mc?(0,A.c)(t,l):l instanceof b.v6&&(0,y.s)(t,l,1/256):(t.fill(255),l instanceof b.ct?(0,S.s)(t,l.typedBuffer,255,4,l.typedBufferStride):e.attributes.color instanceof b.ne?(0,E.c)(t,l.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof b.mw&&(0,S.s)(t,l.typedBuffer,1/256,4,l.typedBufferStride)),s.push([eu.T.COLOR,new q.a(t,i,4,!0)])}return{geometry:new ed(t,s),vertexCount:r}}(e,null!=i?i:new tG({})),p=o.boundingInfo;null!=p&&0===u&&((0,x.pp)(c,p.bbMin),(0,x.pp)(c,p.bbMax)),null!=i&&(m.stageResources.geometries.push(o),m.numberOfVertices+=l)}),f||o.push(m)}),{engineResources:o,referenceBoundingBox:c}}(i,s,{...t.materialParameters,treeRendering:o},t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:l,referenceBoundingBox:c,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1}}let t9=(0,f.Ue)()},13977:function(e,t,r){var i,n;r.d(t,{a9:function(){return i}}),r(13507),(n=i||(i={}))[n.Multiply=1]="Multiply",n[n.Ignore=2]="Ignore",n[n.Replace=3]="Replace",n[n.Tint=4]="Tint"},77043:function(e,t,r){r.d(t,{Gw:function(){return c},U$:function(){return l}});var i=r(12287),n=r(15635),o=r(26158);class a{constructor(e,t){for(let r of(this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t,e.fields.keys())){let t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){let r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new a(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t=0,r=0,i=e.count){let n=this.stride;if(n%4==0){let o=new Uint32Array(e.buffer,t*n,i*n/4);new Uint32Array(this.buffer,r*n,i*n/4).set(o)}else{let o=new Uint8Array(e.buffer,t*n,i*n);new Uint8Array(this.buffer,r*n,i*n).set(o)}return this}get usedMemory(){return this.byteLength}dispose(){}}class s{constructor(e=null){this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach(e=>{var t;return this._fields.set(e[0],{...e[1],constructor:(t=e[1].constructor,h.get(t))})}))}freeze(){return this}vec2f(e,t){return this._appendField(e,i.Eu,t),this}vec2f64(e,t){return this._appendField(e,i.q6,t),this}vec3f(e,t){return this._appendField(e,i.ct,t),this}vec3f64(e,t){return this._appendField(e,i.fP,t),this}vec4f(e,t){return this._appendField(e,i.ek,t),this}vec4f64(e,t){return this._appendField(e,i.Cd,t),this}mat3f(e,t){return this._appendField(e,i.gK,t),this}mat3f64(e,t){return this._appendField(e,i.ey,t),this}mat4f(e,t){return this._appendField(e,i.bj,t),this}mat4f64(e,t){return this._appendField(e,i.O1,t),this}vec4u8(e,t){return this._appendField(e,i.mc,t),this}f32(e,t){return this._appendField(e,i.ly,t),this}f64(e,t){return this._appendField(e,i.oS,t),this}u8(e,t){return this._appendField(e,i.D_,t),this}u16(e,t){return this._appendField(e,i.av,t),this}i8(e,t){return this._appendField(e,i.Hz,t),this}vec2i8(e,t){return this._appendField(e,i.Vs,t),this}vec2i16(e,t){return this._appendField(e,i.or,t),this}vec2u8(e,t){return this._appendField(e,i.xA,t),this}vec4u16(e,t){return this._appendField(e,i.v6,t),this}u32(e,t){return this._appendField(e,i.Nu,t),this}_appendField(e,t,r){if(this._fields.has(e))return void(0,o.hu)(!1,`${e} already added to vertex buffer layout`);let i=t.ElementCount*(0,n.n1)(t.ElementType),a=this._stride;this._stride+=i,this._fields.set(e,{size:i,constructor:t,offset:a,optional:r})}createBuffer(e){return new a(this,e)}createView(e){return new a(this,e)}clone(){let e=new s;return e._stride=this._stride,e._fields=new Map,this._fields.forEach((t,r)=>e._fields.set(r,t)),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach(t=>e=Math.max(e,(0,n.n1)(t.constructor.ElementType))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function l(){return new s}class c{constructor(e){this.fields=[],e.fields.forEach((e,t)=>{let r={...e,constructor:d(e.constructor)};this.fields.push([t,r])}),this.stride=e.stride}}let u=[i.ly,i.Eu,i.ct,i.ek,i.gK,i.bj,i.oS,i.q6,i.fP,i.Cd,i.ey,i.O1,i.D_,i.xA,i.ne,i.mc,i.av,i.TS,i.mw,i.v6,i.Nu,i.qt,i.G5,i.hu,i.Hz,i.Vs,i.P_,i.ir,i.o7,i.or,i.n1,i.zO,i.Jj,i.wA,i.PP,i.TN];function d(e){return`${e.ElementType}_${e.ElementCount}`}let h=new Map;u.forEach(e=>h.set(d(e),e))},44698:function(e,t,r){r.d(t,{A:function(){return o}});var i=r(13977),n=r(1755);function o(e){e.vertex.code.add((0,n.H)`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n.H.int(i.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n.H.int(i.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n.H.int(i.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n.H.int(i.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},56424:function(e,t,r){r.d(t,{Zu:function(){return l},bA:function(){return c},qj:function(){return u}});var i=r(11293),n=r(72330),o=r(56782),a=r(1755);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new o.A("nearFar",(e,t)=>t.camera.nearFar))}function c(e){e.vertex.code.add((0,a.H)`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function u(e,t){let{vertex:r}=e;switch(t.output){case i.H_.Color:if(t.receiveShadows)return s(e),void r.code.add((0,a.H)`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.H_.Shadow:case i.H_.ShadowHighlight:case i.H_.ShadowExcludeHighlight:case i.H_.ViewshedShadow:return e.include(n.up,t),s(e),l(e),c(e),void r.code.add((0,a.H)`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add((0,a.H)`void forwardLinearDepth() {}`)}},14949:function(e,t,r){r.d(t,{w:function(){return n}});var i=r(1755);function n(e){e.vertex.code.add((0,i.H)`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},1118:function(e,t,r){r.d(t,{k:function(){return o}});var i=r(1755),n=r(20186);function o(e,t=!0){e.attributes.add(n.T.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add((0,i.H)`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?(0,i.H)`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},11293:function(e,t,r){var i,n;function o(e){return e===i.Shadow||e===i.ShadowHighlight||e===i.ShadowExcludeHighlight||e===i.ViewshedShadow}function a(e){var t;return e===i.Color||(t=e)===i.Highlight||t===i.ObjectAndLayerIdColor||e===i.Depth||e===i.Normal}r.d(t,{H_:function(){return i},Jb:function(){return a},Kr:function(){return o}}),(n=i||(i={}))[n.Color=0]="Color",n[n.Depth=1]="Depth",n[n.Normal=2]="Normal",n[n.Shadow=3]="Shadow",n[n.ShadowHighlight=4]="ShadowHighlight",n[n.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",n[n.ViewshedShadow=6]="ViewshedShadow",n[n.Highlight=7]="Highlight",n[n.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",n[n.COUNT=9]="COUNT"},77312:function(e,t,r){r.d(t,{f5:function(){return c}});var i=r(94807),n=r(77244),o=r(60964),a=r(82955),s=r(28459);r(55139);var l=r(1755);function c(e,t){!function(e,t,...r){if(!t.hasSlicePlane){let r=(0,l.H)`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);let i=(0,l.H)`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,n=(0,l.H)`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=t.hasSliceHighlight?(0,l.H)`
        ${n}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:(0,l.H)`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(o)}(e,t,new s.B("slicePlaneOrigin",(e,r)=>(function(e,t,r){if(null==r.slicePlane)return a.AG;let i=u(e,t,r),n=d(i,r.slicePlane),s=h(e,i,r);return null!=s?(0,o.h)(p,n,s):n})(t,e,r)),new s.B("slicePlaneBasis1",(e,r)=>f(t,e,r,r.slicePlane?.basis1)),new s.B("slicePlaneBasis2",(e,r)=>f(t,e,r,r.slicePlane?.basis2)))}function u(e,t,r){return e.instancedDoublePrecision?(0,o.s)(m,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function d(e,t){return null!=e?(0,o.f)(p,t.origin,e):t.origin}function h(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,i.Iu)(g,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function f(e,t,r,i){if(null==i||null==r.slicePlane)return a.AG;let n=u(e,t,r),s=d(n,r.slicePlane),l=h(e,n,r);return null!=l?((0,o.g)(v,i,s),(0,o.h)(p,s,l),(0,o.h)(v,v,l),(0,o.f)(v,v,p)):i}let m=(0,a.Ue)(),p=(0,a.Ue)(),v=(0,a.Ue)(),g=(0,n.Ue)()},452:function(e,t,r){r.d(t,{w:function(){return o}});var i=r(56424),n=r(1755);function o(e){(0,i.bA)(e),e.vertex.code.add((0,n.H)`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add((0,n.H)`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},76913:function(e,t,r){r.d(t,{PO:function(){return x},fQ:function(){return b}});var i=r(86641),n=r(15514),o=r(25607),a=r(77244),s=r(60964),l=r(82955),c=r(11293),u=r(27869),d=r(89539),h=r(28459),f=r(1755),m=r(13990),p=r(3933),v=r(86624),g=r(20186),_=r(83630);class x extends v.m{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,i._)([(0,v.o)()],x.prototype,"instancedDoublePrecision",void 0),(0,i._)([(0,v.o)()],x.prototype,"hasModelTransformation",void 0);let T=(0,o.Ue)();function b(e,t){let r=t.hasModelTransformation,i=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new p.g("model",e=>e.modelTransformation??a.Wd)),e.vertex.uniforms.add(new m.c("normalLocalOriginFromModel",e=>((0,n.XL)(T,e.modelTransformation??a.Wd),T)))),t.instanced&&i&&(e.attributes.add(g.T.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(g.T.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(g.T.INSTANCEMODEL,"mat3"),e.attributes.add(g.T.INSTANCEMODELNORMAL,"mat3"));let o=e.vertex;i&&(o.include(u.$,t),o.uniforms.add(new h.B("viewOriginHi",(e,t)=>(0,_.U8)((0,s.s)(S,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),S)),new h.B("viewOriginLo",(e,t)=>(0,_.GB)((0,s.s)(S,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),S)))),o.code.add((0,f.H)`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?(0,f.H)`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add((0,f.H)`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===c.H_.Normal&&((0,d._8)(o),o.code.add((0,f.H)`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&o.code.add((0,f.H)`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}let S=(0,l.Ue)()},16270:function(e,t,r){r.d(t,{O:function(){return l},r:function(){return n}});var i,n,o=r(39928),a=r(1755),s=r(20186);function l(e,t){switch(t.normalType){case n.Compressed:e.attributes.add(s.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add((0,a.H)`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case n.Attribute:e.attributes.add(s.T.NORMAL,"vec3"),e.vertex.code.add((0,a.H)`vec3 normalModel() {
return normal;
}`);break;case n.ScreenDerivative:e.fragment.code.add((0,a.H)`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,o.Bg)(t.normalType);case n.COUNT:case n.Ground:}}(i=n||(n={}))[i.Attribute=0]="Attribute",i[i.Compressed=1]="Compressed",i[i.Ground=2]="Ground",i[i.ScreenDerivative=3]="ScreenDerivative",i[i.COUNT=4]="COUNT"},12803:function(e,t,r){r.d(t,{f:function(){return o}});var i=r(1755),n=r(20186);function o(e){e.attributes.add(n.T.POSITION,"vec3"),e.vertex.code.add((0,i.H)`vec3 positionModel() { return position; }`)}},6925:function(e,t,r){r.d(t,{R:function(){return l}});var i=r(44698),n=r(30033),o=r(1755),a=r(20186),s=r(24031);function l(e,t){t.hasSymbolColors?(e.include(i.A),e.attributes.add(a.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add((0,o.H)`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new n._("colorMixMode",e=>s.FZ[e.colorMixMode])),e.vertex.code.add((0,o.H)`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},96358:function(e,t,r){r.d(t,{D:function(){return l},N:function(){return n}});var i,n,o=r(39928),a=r(1755),s=r(20186);function l(e,t){switch(t.textureCoordinateType){case n.Default:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add((0,a.H)`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case n.Compressed:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add((0,a.H)`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case n.Atlas:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(s.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add((0,a.H)`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,o.Bg)(t.textureCoordinateType);case n.None:return void e.vertex.code.add((0,a.H)`void forwardTextureCoordinates() {}`);case n.COUNT:return}}(i=n||(n={}))[i.None=0]="None",i[i.Default=1]="Default",i[i.Atlas=2]="Atlas",i[i.Compressed=3]="Compressed",i[i.COUNT=4]="COUNT"},21091:function(e,t,r){r.d(t,{c:function(){return o}});var i=r(1755),n=r(20186);function o(e,t){t.hasVertexColors?(e.attributes.add(n.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add((0,i.H)`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add((0,i.H)`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add((0,i.H)`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},54907:function(e,t,r){r.d(t,{Bb:function(){return d},Pf:function(){return f},d4:function(){return h}});var i=r(39928),n=r(25607),o=r(40465),a=r(16270),s=r(72330),l=r(1755),c=r(21488),u=r(13990);function d(e,t){switch(t.normalType){case a.r.Attribute:case a.r.Compressed:e.include(a.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new c.j("transformNormalGlobalFromModel",e=>e.transformNormalGlobalFromModel),new u.c("transformNormalViewFromGlobal",e=>e.transformNormalViewFromGlobal)),e.vertex.code.add((0,l.H)`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case a.r.Ground:e.include(s.up,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add((0,l.H)`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?(0,l.H)`normalize(vPositionWorldCameraRelative);`:(0,l.H)`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case a.r.ScreenDerivative:e.vertex.code.add((0,l.H)`void forwardNormal() {}`);break;default:(0,i.Bg)(t.normalType);case a.r.COUNT:}}class h extends s.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,n.Ue)()}}class f extends s.OU{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,n.Ue)(),this.toMapSpace=(0,o.Ue)()}}},72330:function(e,t,r){r.d(t,{OU:function(){return v},su:function(){return p},up:function(){return m}});var i=r(25607),n=r(77244),o=r(82955),a=r(12803),s=r(27869),l=r(28459),c=r(55139),u=r(1755),d=r(21488),h=r(13990),f=r(3933);function m(e,t){e.include(a.f);let r=e.vertex;r.include(s.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new c.J("transformWorldFromViewTH",e=>e.transformWorldFromViewTH),new c.J("transformWorldFromViewTL",e=>e.transformWorldFromViewTL),new h.c("transformViewFromCameraRelativeRS",e=>e.transformViewFromCameraRelativeRS),new f.g("transformProjFromView",e=>e.transformProjFromView),new d.j("transformWorldFromModelRS",e=>e.transformWorldFromModelRS),new l.B("transformWorldFromModelTH",e=>e.transformWorldFromModelTH),new l.B("transformWorldFromModelTL",e=>e.transformWorldFromModelTL)),r.code.add((0,u.H)`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add((0,u.H)`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?(0,u.H)`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:(0,u.H)`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new c.J("transformWorldFromViewTL",e=>e.transformWorldFromViewTL)),r.code.add((0,u.H)`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add((0,u.H)`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class p extends u.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,o.Ue)(),this.transformWorldFromViewTL=(0,o.Ue)(),this.transformViewFromCameraRelativeRS=(0,i.Ue)(),this.transformProjFromView=(0,n.Ue)()}}class v extends u.K{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,i.Ue)(),this.transformWorldFromModelTH=(0,o.Ue)(),this.transformWorldFromModelTL=(0,o.Ue)()}}},80517:function(e,t,r){r.d(t,{i:function(){return s}});var i=r(39928),n=r(96358),o=r(1755);function a(e){e.fragment.code.add((0,o.H)`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function s(e,t){switch(e.include(n.D,t),t.textureCoordinateType){case n.N.Default:case n.N.Compressed:return void e.fragment.code.add((0,o.H)`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case n.N.Atlas:return e.include(a),void e.fragment.code.add((0,o.H)`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,i.Bg)(t.textureCoordinateType);case n.N.None:case n.N.COUNT:return}}},95043:function(e,t,r){r.d(t,{L:function(){return f}});var i=r(91870),n=r(40465),o=r(60964),a=r(82955),s=r(55139),l=r(1755);function c(e){e.vertex.code.add((0,l.H)`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add((0,l.H)`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add((0,l.H)`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add((0,l.H)`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add((0,l.H)`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add((0,l.H)`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}let u=(0,a.Ue)();var d=r(89539),h=r(94163);function f(e,t){let r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new h.N("verticalOffset",(e,t)=>{let{minWorldLength:r,maxWorldLength:n,screenLength:o}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(m,o*s,a,r,n)}))}(r),t.hasScreenSizePerspective&&(e.include(c),function(e){e.uniforms.add(new s.J("screenSizePerspectiveAlignment",e=>{var t;return t=e.screenSizePerspectiveAlignment||e.screenSizePerspective,(0,o.s)(u,t.parameters.divisor,t.parameters.offset,t.minScaleFactor)}))}(r),(0,d.hY)(e.vertex,t)),r.code.add((0,l.H)`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?(0,l.H)`vec3 worldNormal = normalize(worldPos + localOrigin);`:(0,l.H)`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?(0,l.H)`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:(0,l.H)`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add((0,l.H)`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}let m=(0,n.Ue)()},68835:function(e,t,r){r.d(t,{s:function(){return w}});var i=r(56424),n=r(11293),o=r(77312),a=r(452),s=r(16270),l=r(1755),c=r(20186);function u(e,t){let r=t.output===n.H_.ObjectAndLayerIdColor,i=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),i?e.attributes.add(c.T.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(c.T.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add((0,l.H)`
     void forwardObjectAndLayerIdColor() {
      ${r?i?(0,l.H)`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:(0,l.H)`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:(0,l.H)``} }`),e.fragment.code.add((0,l.H)`
      void outputObjectAndLayerIdColor() {
        ${r?(0,l.H)`fragColor = objectAndLayerIdColorVarying;`:(0,l.H)``} }`)}var d=r(96358),h=r(54907),f=r(71494);function m(e,t){switch(t.output){case n.H_.Shadow:case n.H_.ShadowHighlight:case n.H_.ShadowExcludeHighlight:case n.H_.ViewshedShadow:e.fragment.include(f.f),e.fragment.code.add((0,l.H)`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}var p=r(40465),v=r(12701);let g=(0,p.al)(1,1,0,1),_=(0,p.al)(1,0,1,1);function x(e){e.fragment.uniforms.add(new v.A("depthTexture",(e,t)=>t.mainDepth)),e.fragment.constants.add("occludedHighlightFlag","vec4",g).add("unoccludedHighlightFlag","vec4",_),e.fragment.code.add((0,l.H)`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}var T=r(29699),b=r(94022),S=r(89539),y=r(73295);function w(e,t){let{vertex:r,fragment:c}=e,f=t.hasColorTexture&&t.alphaDiscardMode!==y.JJ.Opaque;switch(t.output){case n.H_.Depth:(0,S.Sv)(r,t),e.include(a.w,t),e.include(o.f5,t),e.include(d.D,t),f&&c.uniforms.add(new v.A("tex",e=>e.texture)),r.code.add((0,l.H)`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(b.z,t),c.code.add((0,l.H)`
          void main(void) {
            discardBySlice(vpos);
            ${f?(0,l.H)`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?(0,l.H)`colorUV`:(0,l.H)`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
          }
        `);break;case n.H_.Shadow:case n.H_.ShadowHighlight:case n.H_.ShadowExcludeHighlight:case n.H_.ViewshedShadow:case n.H_.ObjectAndLayerIdColor:(0,S.Sv)(r,t),e.include(a.w,t),e.include(d.D,t),e.include(T.k,t),e.include(m,t),e.include(o.f5,t),e.include(u,t),(0,i.Zu)(e),e.varyings.add("depth","float"),f&&c.uniforms.add(new v.A("tex",e=>e.texture)),r.code.add((0,l.H)`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(b.z,t),c.code.add((0,l.H)`
          void main(void) {
            discardBySlice(vpos);
            ${f?(0,l.H)`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?(0,l.H)`colorUV`:(0,l.H)`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===n.H_.ObjectAndLayerIdColor?(0,l.H)`outputObjectAndLayerIdColor();`:(0,l.H)`outputDepth(depth);`}
          }
        `);break;case n.H_.Normal:{(0,S.Sv)(r,t),e.include(a.w,t),e.include(s.O,t),e.include(h.Bb,t),e.include(d.D,t),e.include(T.k,t),f&&c.uniforms.add(new v.A("tex",e=>e.texture)),t.normalType===s.r.ScreenDerivative&&e.varyings.add("vPositionView","vec3");let i=t.normalType===s.r.Attribute||t.normalType===s.r.Compressed;r.code.add((0,l.H)`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${i?(0,l.H)`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:(0,l.H)`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(o.f5,t),e.include(b.z,t),c.code.add((0,l.H)`
          void main() {
            discardBySlice(vpos);
            ${f?(0,l.H)`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?(0,l.H)`colorUV`:(0,l.H)`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===s.r.ScreenDerivative?(0,l.H)`vec3 normal = screenDerivativeNormal(vPositionView);`:(0,l.H)`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case n.H_.Highlight:(0,S.Sv)(r,t),e.include(a.w,t),e.include(d.D,t),e.include(T.k,t),f&&c.uniforms.add(new v.A("tex",e=>e.texture)),r.code.add((0,l.H)`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(o.f5,t),e.include(b.z,t),e.include(x,t),c.code.add((0,l.H)`
          void main() {
            discardBySlice(vpos);
            ${f?(0,l.H)`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?(0,l.H)`colorUV`:(0,l.H)`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},21037:function(e,t,r){r.d(t,{K:function(){return s}});var i=r(76827),n=r(24168);r(70136);var o=r(56782),a=r(1755);function s(e){e.uniforms.add(new o.A("zProjectionMap",(e,t)=>(function(e){let t=e.projectionMatrix;return(0,i.t8)(l,t[14],t[10])})(t.camera))),e.code.add((0,a.H)`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add((0,a.H)`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add((0,a.H)`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}let l=(0,n.Ue)()},59600:function(e,t,r){r.d(t,{Q:function(){return p}});var i=r(25607),n=r(24168),o=r(96358),a=r(80517),s=r(75148),l=r(56782),c=r(1755),u=r(13990),d=r(61565),h=r(12701),f=r(20002),m=r(20186);function p(e,t){let r=e.fragment;t.hasVertexTangents?(e.attributes.add(m.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===s.q.WindingOrder?r.code.add((0,c.H)`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add((0,c.H)`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add((0,c.H)`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==o.N.None&&(e.include(a.i,t),r.uniforms.add(t.pbrTextureBindType===f.P.Pass?new h.A("normalTexture",e=>e.textureNormal):new d.R("normalTexture",e=>e.textureNormal)),t.hasNormalTextureTransform&&(r.uniforms.add(new l.A("scale",e=>e.scale??n.hq)),r.uniforms.add(new u.c("normalTextureTransformMatrix",e=>e.normalTextureTransformMatrix??i.Wd))),r.code.add((0,c.H)`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add((0,c.H)`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add((0,c.H)`return tangentSpace * rawNormal;
}`))}},20273:function(e,t,r){r.d(t,{K:function(){return V}});var i,n,o,a,s=r(1755),l=r(12701),c=r(86641),u=r(13507),d=r(36152),h=r(20128),f=r(21684),m=r(89312);r(37180),r(65223),r(3457);var p=r(64186),v=r(76827);(i=o||(o={}))[i.RED=0]="RED",i[i.RG=1]="RG",i[i.RGBA4=2]="RGBA4",i[i.RGBA=3]="RGBA",i[i.RGBA_MIPMAP=4]="RGBA_MIPMAP",i[i.R16F=5]="R16F",i[i.RGBA16F=6]="RGBA16F",(n=a||(a={}))[n.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",n[n.DEPTH16_BUFFER=1]="DEPTH16_BUFFER";var g=r(94761),_=r(94605),x=r(73295);let T=class extends g.Z{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces="composite-color",this._context=null,this._dirty=!0}initialize(){this.addHandles([(0,h.YP)(()=>this.view.ready,e=>{e&&this.view._stage?.renderer.addRenderNode(this)},h.nn)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}render(){throw new _.Z("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){let e=this._frameBuffer?.getTexture()?.descriptor,t=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return t.fbo?.initializeAndBind(),t}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===x.Xx.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this._context.bindParameters}get renderingContext(){return this.view._stage.renderView.renderingContext}updateAnimation(){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e,t){this._context=t,this._frameBuffer=e.find(({name:e})=>e===this.produces);try{return this.render(e)}finally{this._frameBuffer=null}}};(0,c._)([(0,m.Cb)({constructOnly:!0})],T.prototype,"view",void 0),(0,c._)([(0,m.Cb)({constructOnly:!0})],T.prototype,"consumes",void 0),(0,c._)([(0,m.Cb)()],T.prototype,"produces",void 0);let b=T=(0,c._)([(0,p.j)("esri.views.3d.webgl.RenderNode")],T);var S=r(10769),y=r(53152),w=r(68940),E=r(93109),A=r(44021),C=r(44163);class M extends y.A{initializeProgram(e){return new E.$(e.rctx,M.shader.get().build(),w.i)}initializePipeline(){return(0,C.sm)({colorWrite:C.BK})}}M.shader=new S.J(A.S,()=>r.e(59203).then(r.bind(r,59203)));var O=r(24168);class R extends s.K{constructor(){super(...arguments),this.projScale=1}}class I extends R{constructor(){super(...arguments),this.intensity=1}}class P extends s.K{}class N extends P{constructor(){super(...arguments),this.blurSize=(0,O.Ue)()}}var H=r(22038);class L extends y.A{initializeProgram(e){return new E.$(e.rctx,L.shader.get().build(),w.i)}initializePipeline(){return(0,C.sm)({colorWrite:C.BK})}}L.shader=new S.J(H.S,()=>r.e(57827).then(r.bind(r,57827)));var D=r(71193),F=r(15809),B=r(66897);let U=class extends b{constructor(e){super(e),this.consumes={required:["normals"]},this.produces="ssao",this.isEnabled=()=>!1,this._enableTime=(0,f.HA)(0),this._passParameters=new I,this._drawParameters=new N}initialize(){let e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),e=>e.charCodeAt(0)),t=new B.X;t.wrapMode=D.e8.CLAMP_TO_EDGE,t.pixelFormat=D.VI.RGB,t.wrapMode=D.e8.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new F.x(this.renderingContext,t,e),this._ssaoTechnique=this.techniques.acquire(L),this._blurTechnique=this.techniques.acquire(M),this.addHandles((0,h.YP)(()=>this.isEnabled(),()=>this._enableTime=(0,f.HA)(0)))}destroy(){this._passParameters.noiseTexture=(0,d.M2)(this._passParameters.noiseTexture),this._blurTechnique.release(),this._ssaoTechnique.release()}render(e){let t=this.bindParameters,r=e.find(({name:e})=>"normals"===e),i=r?.getTexture(),n=r?.getTexture(D.Lu),a=this.fboCache,s=t.camera,l=s.fullViewport[2],c=s.fullViewport[3],d=Math.round(l/2),h=Math.round(c/2);if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=(0,f.HA)(performance.now()),this.requestRender(),a.acquire(d,h,"ssao",o.RED);0===this._enableTime&&(this._enableTime=(0,f.HA)(performance.now()));let m=this.renderingContext,p=this.view.qualitySettings.fadeDuration,g=s.relativeElevation,_=(0,u.uZ)((5e5-g)/2e5,0,1),T=p>0?Math.min(p,performance.now()-this._enableTime)/p:1;this._passParameters.normalTexture=i,this._passParameters.depthTexture=n,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*z/(0,H.g)(s)**6*(T*_);let b=a.acquire(l,c,"ssao input",o.RG);m.unbindTexture(b.fbo.colorTexture),m.bindFramebuffer(b.fbo),m.setViewport(0,0,l,c),m.bindTechnique(this._ssaoTechnique,t,this._passParameters,this._drawParameters),m.screen.draw();let S=a.acquire(d,h,"ssao blur",o.RED);m.unbindTexture(S.fbo.colorTexture),m.bindFramebuffer(S.fbo),this._drawParameters.colorTexture=b.getTexture(),(0,v.t8)(this._drawParameters.blurSize,0,2/c),m.bindTechnique(this._blurTechnique,t,this._passParameters,this._drawParameters),m.setViewport(0,0,d,h),m.screen.draw(),b.release();let y=a.acquire(d,h,"ssao",o.RED);return m.unbindTexture(y.fbo.colorTexture),m.bindFramebuffer(y.fbo),m.setViewport(0,0,l,c),m.setClearColor(1,1,1,0),m.clear(D.lk.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=S.getTexture(),(0,v.t8)(this._drawParameters.blurSize,2/l,0),m.bindTechnique(this._blurTechnique,t,this._passParameters,this._drawParameters),m.setViewport(0,0,d,h),m.screen.draw(),m.setViewport4fv(s.fullViewport),S.release(),T<1&&this.requestRender(x.Xx.UPDATE),y}};(0,c._)([(0,m.Cb)()],U.prototype,"consumes",void 0),(0,c._)([(0,m.Cb)()],U.prototype,"produces",void 0),(0,c._)([(0,m.Cb)({constructOnly:!0})],U.prototype,"techniques",void 0),(0,c._)([(0,m.Cb)({constructOnly:!0})],U.prototype,"isEnabled",void 0),U=(0,c._)([(0,p.j)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],U);let z=.5;function V(e,t){let r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new l.A("ssaoTex",(e,t)=>t.ssao?.getTexture())),r.constants.add("blurSizePixelsInverse","float",.5),r.code.add((0,s.H)`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add((0,s.H)`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},15836:function(e,t,r){r.d(t,{XP:function(){return E},PN:function(){return y},sC:function(){return w}});var i=r(39928),n=r(60964),o=r(82955),a=r(91870),s=r(40465),l=r(3029),c=r(55139),u=r(94163),d=r(1755);function h(e,t){let r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new c.J("lightingAmbientSH0",(e,t)=>(0,n.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),r.code.add((0,d.H)`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add(new u.N("lightingAmbientSH_R",(e,t)=>(0,a.s)(m,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3])),new u.N("lightingAmbientSH_G",(e,t)=>(0,a.s)(m,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3])),new u.N("lightingAmbientSH_B",(e,t)=>(0,a.s)(m,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3]))),r.code.add((0,d.H)`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(r.uniforms.add(new c.J("lightingAmbientSH0",(e,t)=>(0,n.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])),new u.N("lightingAmbientSH_R1",(e,t)=>(0,a.s)(m,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4])),new u.N("lightingAmbientSH_G1",(e,t)=>(0,a.s)(m,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4])),new u.N("lightingAmbientSH_B1",(e,t)=>(0,a.s)(m,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4])),new u.N("lightingAmbientSH_R2",(e,t)=>(0,a.s)(m,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8])),new u.N("lightingAmbientSH_G2",(e,t)=>(0,a.s)(m,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8])),new u.N("lightingAmbientSH_B2",(e,t)=>(0,a.s)(m,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8]))),r.code.add((0,d.H)`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==l.f7.Normal&&t.pbrMode!==l.f7.Schematic||r.code.add((0,d.H)`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}let f=(0,o.Ue)(),m=(0,s.Ue)();var p=r(20273),v=r(22412),g=r(37587),_=r(30132),x=r(32684),T=r(20002);class b extends x.x{constructor(e,t){super(e,"bool",T.P.Pass,(r,i,n)=>r.setUniform1b(e,t(i,n)))}}var S=r(44525);function y(e){e.constants.add("ambientBoostFactor","float",.4)}function w(e){e.uniforms.add(new S.p("lightingGlobalFactor",(e,t)=>t.lighting.globalFactor))}function E(e,t){let r=e.fragment;switch(e.include(p.K,t),t.pbrMode!==l.f7.Disabled&&e.include(g.T,t),e.include(h,t),e.include(_.e),r.code.add((0,d.H)`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),y(r),w(r),(0,v.Pe)(r),r.code.add((0,d.H)`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?(0,d.H)`normalize(vPosWorld)`:(0,d.H)`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,v.F1)(r),r.code.add((0,d.H)`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.f7.Disabled:case l.f7.WaterOnIntegratedMesh:case l.f7.Water:e.include(v.kR),r.code.add((0,d.H)`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.f7.Normal:case l.f7.Schematic:r.code.add((0,d.H)`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add((0,d.H)`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new b("hasFillLights",(e,t)=>t.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add((0,d.H)`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new S.p("lightingSpecularStrength",(e,t)=>t.lighting.mainLight.specularStrength),new S.p("lightingEnvironmentStrength",(e,t)=>t.lighting.mainLight.environmentStrength)),r.code.add((0,d.H)`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add((0,d.H)`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==l.f7.Schematic||t.hasColorTexture?(0,d.H)`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:(0,d.H)`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.f7.Simplified:case l.f7.TerrainWithWater:e.include(v.kR),r.code.add((0,d.H)`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,i.Bg)(t.pbrMode);case l.f7.COUNT:}}r(13507),(0,o.Ue)(),(0,o.Ue)()},22412:function(e,t,r){r.d(t,{F1:function(){return a},Pe:function(){return o},kR:function(){return s}});var i=r(55139),n=r(1755);function o(e){e.uniforms.add(new i.J("mainLightDirection",(e,t)=>t.lighting.mainLight.direction))}function a(e){e.uniforms.add(new i.J("mainLightIntensity",(e,t)=>t.lighting.mainLight.intensity))}function s(e){o(e.fragment),a(e.fragment),e.fragment.code.add((0,n.H)`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},80336:function(e,t,r){r.d(t,{l:function(){return a}});var i=r(21037),n=r(1755),o=r(12701);function a(e,t){if(!t.multipassEnabled)return;e.fragment.include(i.K),e.fragment.uniforms.add(new o.A("terrainDepthTexture",(e,t)=>t.multipassTerrain.depth?.attachment));let r=t.occlusionPass;e.fragment.code.add((0,n.H)`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${r?(0,n.H)`return fragmentDepth < linearDepth && depth < 1.0;`:(0,n.H)`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}},75148:function(e,t,r){r.d(t,{k:function(){return s},q:function(){return n}});var i,n,o=r(39928),a=r(1755);function s(e,t){let r=e.fragment;switch(r.code.add((0,a.H)`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case n.None:r.code.add((0,a.H)`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case n.View:r.code.add((0,a.H)`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case n.WindingOrder:r.code.add((0,a.H)`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,o.Bg)(t.doubleSidedMode);case n.COUNT:}}(i=n||(n={}))[i.None=0]="None",i[i.View=1]="View",i[i.WindingOrder=2]="WindingOrder",i[i.COUNT=3]="COUNT"},37587:function(e,t,r){r.d(t,{T:function(){return s}});var i=r(1755);function n(e){let t=e.fragment.code;t.add((0,i.H)`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add((0,i.H)`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add((0,i.H)`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var o=r(3029),a=r(30132);function s(e,t){let r=e.fragment.code;e.include(a.e),t.pbrMode!==o.f7.Normal&&t.pbrMode!==o.f7.Schematic&&t.pbrMode!==o.f7.Simplified&&t.pbrMode!==o.f7.TerrainWithWater||(r.add((0,i.H)`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add((0,i.H)`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==o.f7.Normal&&t.pbrMode!==o.f7.Schematic||(e.include(n),r.add((0,i.H)`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add((0,i.H)`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add((0,i.H)`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add((0,i.H)`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},3029:function(e,t,r){r.d(t,{f7:function(){return n},jV:function(){return h}});var i,n,o=r(80517),a=r(28459),s=r(55139),l=r(1755),c=r(61565),u=r(12701),d=r(20002);function h(e,t){let r=e.fragment,i=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===n.Normal&&i&&e.include(o.i,t),t.pbrMode!==n.Schematic){if(t.pbrMode!==n.Disabled){if(t.pbrMode===n.Normal){r.code.add((0,l.H)`vec3 mrr;
vec3 emission;
float occlusion;`);let e=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(e===d.P.Pass?new u.A("texMetallicRoughness",e=>e.textureMetallicRoughness):new c.R("texMetallicRoughness",e=>e.textureMetallicRoughness)),r.code.add((0,l.H)`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(e===d.P.Pass?new u.A("texEmission",e=>e.textureEmissive):new c.R("texEmission",e=>e.textureEmissive)),r.code.add((0,l.H)`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(e===d.P.Pass?new u.A("texOcclusion",e=>e.textureOcclusion):new c.R("texOcclusion",e=>e.textureOcclusion)),r.code.add((0,l.H)`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add((0,l.H)`float getBakedOcclusion() { return 1.0; }`),e===d.P.Pass?r.uniforms.add(new s.J("emissionFactor",e=>e.emissiveFactor),new s.J("mrrFactors",e=>e.mrrFactors)):r.uniforms.add(new a.B("emissionFactor",e=>e.emissiveFactor),new a.B("mrrFactors",e=>e.mrrFactors)),r.code.add((0,l.H)`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?(0,l.H)`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?(0,l.H)`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?(0,l.H)`applyEmission(${t.hasEmissiveTextureTransform?(0,l.H)`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?(0,l.H)`applyOcclusion(${t.hasOcclusionTextureTransform?(0,l.H)`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add((0,l.H)`float getBakedOcclusion() { return 1.0; }`)}else r.code.add((0,l.H)`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}r(36970),(i=n||(n={}))[i.Disabled=0]="Disabled",i[i.Normal=1]="Normal",i[i.Schematic=2]="Schematic",i[i.Water=3]="Water",i[i.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",i[i.Simplified=5]="Simplified",i[i.TerrainWithWater=6]="TerrainWithWater",i[i.COUNT=7]="COUNT"},30132:function(e,t,r){r.d(t,{e:function(){return n}});var i=r(1755);function n(e){e.vertex.code.add((0,i.H)`const float PI = 3.141592653589793;`),e.fragment.code.add((0,i.H)`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},74437:function(e,t,r){r.d(t,{XE:function(){return f},hb:function(){return h}}),r(77244),r(82955);var i=r(71494),n=r(94163),o=r(30033),a=r(1755),s=r(32684),l=r(20002);class c extends s.x{constructor(e,t,r){super(e,"mat4",l.P.Draw,(r,i,n,o)=>r.setUniformMatrix4fv(e,t(i,n,o)),r)}}class u extends s.x{constructor(e,t,r){super(e,"mat4",l.P.Pass,(r,i,n)=>r.setUniformMatrix4fv(e,t(i,n)),r)}}var d=r(12701);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new u("shadowMapMatrix",(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),m(e))}function f(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),m(e))}function m(e){let t=e.fragment;t.include(i.f),t.uniforms.add(new d.A("shadowMap",(e,t)=>t.shadowMap.depthTexture),new o._("numCascades",(e,t)=>t.shadowMap.numCascades),new n.N("cascadeDistances",(e,t)=>t.shadowMap.cascadeDistances)),t.code.add((0,a.H)`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}},65762:function(e,t,r){r.d(t,{DT:function(){return d},NI:function(){return l},R5:function(){return c},av:function(){return s},jF:function(){return u}});var i=r(25607),n=r(96358),o=r(1755),a=r(13990);function s(e,t){t.hasColorTextureTransform?(e.vertex.uniforms.add(new a.c("colorTextureTransformMatrix",e=>e.colorTextureTransformMatrix??i.Wd)),e.varyings.add("colorUV","vec2"),e.vertex.code.add((0,o.H)`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add((0,o.H)`void forwardColorUV(){}`)}function l(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==n.N.None?(e.vertex.uniforms.add(new a.c("normalTextureTransformMatrix",e=>e.normalTextureTransformMatrix??i.Wd)),e.varyings.add("normalUV","vec2"),e.vertex.code.add((0,o.H)`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add((0,o.H)`void forwardNormalUV(){}`)}function c(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==n.N.None?(e.vertex.uniforms.add(new a.c("emissiveTextureTransformMatrix",e=>e.emissiveTextureTransformMatrix??i.Wd)),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add((0,o.H)`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add((0,o.H)`void forwardEmissiveUV(){}`)}function u(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==n.N.None?(e.vertex.uniforms.add(new a.c("occlusionTextureTransformMatrix",e=>e.occlusionTextureTransformMatrix??i.Wd)),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add((0,o.H)`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add((0,o.H)`void forwardOcclusionUV(){}`)}function d(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==n.N.None?(e.vertex.uniforms.add(new a.c("metallicRoughnessTextureTransformMatrix",e=>e.metallicRoughnessTextureTransformMatrix??i.Wd)),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add((0,o.H)`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add((0,o.H)`void forwardMetallicRoughnessUV(){}`)}},29699:function(e,t,r){r.d(t,{k:function(){return S}});var i,n,o,a,s=r(55139),l=r(32684),c=r(20002);class u extends l.x{constructor(e,t,r){super(e,"vec4",c.P.Pass,(r,i,n)=>r.setUniform4fv(e,t(i,n)),r)}}class d extends l.x{constructor(e,t,r){super(e,"float",c.P.Pass,(r,i,n)=>r.setUniform1fv(e,t(i,n)),r)}}var h=r(1755),f=r(13990),m=r(20186);r(37180),r(13507),r(15514),r(25607),r(94807);var p=r(77244);r(60964);var v=r(82955);r(49078);var g=r(86641),_=r(94761),x=r(89312);r(65223),r(3457);var T=r(64186);let b=class extends _.Z{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};function S(e,t){let{vertex:r,attributes:i}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&i.add(m.T.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new s.J("vvSizeMinSize",e=>e.vvSize.minSize)),r.uniforms.add(new s.J("vvSizeMaxSize",e=>e.vvSize.maxSize)),r.uniforms.add(new s.J("vvSizeOffset",e=>e.vvSize.offset)),r.uniforms.add(new s.J("vvSizeFactor",e=>e.vvSize.factor)),r.uniforms.add(new f.c("vvSymbolRotationMatrix",e=>e.vvSymbolRotationMatrix)),r.uniforms.add(new s.J("vvSymbolAnchor",e=>e.vvSymbolAnchor)),r.code.add((0,h.H)`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add((0,h.H)`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?(0,h.H)`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add((0,h.H)`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",8),r.uniforms.add(new d("vvColorValues",e=>e.vvColor.values,8),new u("vvColorColors",e=>e.vvColor.colors,8)),r.code.add((0,h.H)`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?(0,h.H)`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add((0,h.H)`vec4 vvColor() { return vec4(1.0); }`)}(0,g._)([(0,x.Cb)()],b.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"LABELS_SHOW_BORDER",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"TEXT_SHOW_BASELINE",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"TEXT_SHOW_BORDER",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"SHOW_POI",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,g._)([(0,x.Cb)()],b.prototype,"LINE_WIREFRAMES",void 0),new(b=(0,g._)([(0,T.j)("esri.views.3d.support.debugFlags")],b)),(i=o||(o={}))[i.Undefined=0]="Undefined",i[i.DefinedSize=1]="DefinedSize",i[i.DefinedScale=2]="DefinedScale",(n=a||(a={}))[n.Undefined=0]="Undefined",n[n.DefinedAngle=1]="DefinedAngle",(0,p.Ue)(),(0,v.Ue)(),(0,p.Ue)(),r(87865)},50165:function(e,t,r){r.d(t,{F:function(){return i},b:function(){return n}});let i=.1,n=.001},94022:function(e,t,r){r.d(t,{z:function(){return l}});var i=r(50165),n=r(1755);function o(e){e.fragment.code.add((0,n.H)`
    #define discardOrAdjustAlpha(color) { if (color.a < ${n.H.float(i.b)}) { discard; } }
  `)}r(32684),r(20002);var a=r(44525),s=r(73295);function l(e,t){!function(e,t,r){let i=e.fragment;switch(t.alphaDiscardMode!==s.JJ.Mask&&t.alphaDiscardMode!==s.JJ.MaskBlend||i.uniforms.add(r),t.alphaDiscardMode){case s.JJ.Blend:return e.include(o);case s.JJ.Opaque:i.code.add((0,n.H)`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.JJ.Mask:i.code.add((0,n.H)`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.JJ.MaskBlend:e.fragment.code.add((0,n.H)`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(e,t,new a.p("textureAlphaCutoff",e=>e.textureAlphaCutoff))}},63597:function(e,t,r){r.d(t,{GZ:function(){return u}});var i=r(76827),n=r(24168),o=r(91870),a=r(40465),s=r(56782),l=r(94163),c=r(1755);function u(e){e.fragment.uniforms.add(new l.N("projInfo",(e,t)=>(function(e){let t=e.projectionMatrix;return 0===t[11]?(0,o.s)(d,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,o.s)(d,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])})(t.camera))),e.fragment.uniforms.add(new s.A("zScale",(e,t)=>0===t.camera.projectionMatrix[11]?(0,i.t8)(h,0,1):(0,i.t8)(h,1,0))),e.fragment.code.add((0,c.H)`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}let d=(0,a.Ue)(),h=(0,n.Ue)()},27869:function(e,t,r){r.d(t,{$:function(){return n}});var i=r(1755);function n({code:e},t){t.doublePrecisionRequiresObfuscation?e.add((0,i.H)`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add((0,i.H)`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},76190:function(e,t,r){r.d(t,{y:function(){return a}});var i=r(13977),n=r(1755);function o(e){e.code.add((0,n.H)`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function a(e){e.include(o),e.code.add((0,n.H)`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n.H.int(i.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${n.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(i.a9.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${n.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(i.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},71494:function(e,t,r){r.d(t,{f:function(){return n}});var i=r(1755);function n(e){e.code.add((0,i.H)`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}},70136:function(e,t,r){r(1755)},89539:function(e,t,r){r.d(t,{hY:function(){return f},Sv:function(){return m},_8:function(){return g}});var i=r(94807),n=r(77244),o=r(60964),a=r(82955),s=r(28459),l=r(55139);r(44525);var c=r(32684),u=r(20002);class d extends c.x{constructor(e,t){super(e,"mat4",u.P.Draw,(r,i,n)=>r.setUniformMatrix4fv(e,t(i,n)))}}var h=r(3933);function f(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",a.AG):e.uniforms.add(new s.B("cameraPosition",(e,t)=>(0,o.s)(v,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2])))}function m(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new h.g("proj",(e,t)=>t.camera.projectionMatrix),new d("view",(e,t)=>(0,i.Iu)(p,t.camera.viewMatrix,e.origin)),new s.B("localOrigin",e=>e.origin));let r=e=>(0,o.s)(v,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new h.g("proj",(e,t)=>t.camera.projectionMatrix),new h.g("view",(e,t)=>(0,i.Iu)(p,t.camera.viewMatrix,r(t))),new l.J("localOrigin",(e,t)=>r(t)))}let p=(0,n.Ue)(),v=(0,a.Ue)();function g(e){e.uniforms.add(new h.g("viewNormal",(e,t)=>t.camera.viewInverseTransposeMatrix))}},30003:function(e,t,r){r.d(t,{q:function(){return o}});var i=r(32684),n=r(20002);class o extends i.x{constructor(e,t){super(e,"vec2",n.P.Draw,(r,i,n,o)=>r.setUniform2fv(e,t(i,n,o)))}}},56782:function(e,t,r){r.d(t,{A:function(){return o}});var i=r(32684),n=r(20002);class o extends i.x{constructor(e,t){super(e,"vec2",n.P.Pass,(r,i,n)=>r.setUniform2fv(e,t(i,n)))}}},28459:function(e,t,r){r.d(t,{B:function(){return o}});var i=r(32684),n=r(20002);class o extends i.x{constructor(e,t){super(e,"vec3",n.P.Draw,(r,i,n,o)=>r.setUniform3fv(e,t(i,n,o)))}}},55139:function(e,t,r){r.d(t,{J:function(){return o}});var i=r(32684),n=r(20002);class o extends i.x{constructor(e,t){super(e,"vec3",n.P.Pass,(r,i,n)=>r.setUniform3fv(e,t(i,n)))}}},94163:function(e,t,r){r.d(t,{N:function(){return o}});var i=r(32684),n=r(20002);class o extends i.x{constructor(e,t){super(e,"vec4",n.P.Pass,(r,i,n)=>r.setUniform4fv(e,t(i,n)))}}},44525:function(e,t,r){r.d(t,{p:function(){return o}});var i=r(32684),n=r(20002);class o extends i.x{constructor(e,t){super(e,"float",n.P.Pass,(r,i,n)=>r.setUniform1f(e,t(i,n)))}}},30033:function(e,t,r){r.d(t,{_:function(){return o}});var i=r(32684),n=r(20002);class o extends i.x{constructor(e,t){super(e,"int",n.P.Pass,(r,i,n)=>r.setUniform1i(e,t(i,n)))}}},21488:function(e,t,r){r.d(t,{j:function(){return o}});var i=r(32684),n=r(20002);class o extends i.x{constructor(e,t){super(e,"mat3",n.P.Draw,(r,i,n)=>r.setUniformMatrix3fv(e,t(i,n)))}}},13990:function(e,t,r){r.d(t,{c:function(){return o}});var i=r(32684),n=r(20002);class o extends i.x{constructor(e,t){super(e,"mat3",n.P.Pass,(r,i,n)=>r.setUniformMatrix3fv(e,t(i,n)))}}},3933:function(e,t,r){r.d(t,{g:function(){return o}});var i=r(32684),n=r(20002);class o extends i.x{constructor(e,t){super(e,"mat4",n.P.Pass,(r,i,n)=>r.setUniformMatrix4fv(e,t(i,n)))}}},99011:function(e,t,r){r.d(t,{kG:function(){return c}});var i=r(94605);r(37180);var n=r(65223),o=r(20002),a=r(26158);let s=()=>n.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class l{constructor(){this._includedModules=new Map}include(e,t){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,t),e(this.builder,t))}}class c extends l{constructor(){super(...arguments),this.vertex=new h,this.fragment=new h,this.attributes=new f,this.varyings=new m,this.extensions=new p,this.constants=new g,this.outputs=new v}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){let t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(e),n="vertex"===e?this.vertex:this.fragment,o=n.uniforms.generateSource(),a=n.code.generateSource(),s="vertex"===e?x:_,l=this.constants.generateSource().concat(n.constants.generateSource()),c=this.outputs.generateSource(e);return`#version 300 es
${t.join("\n")}

${s}

${l.join("\n")}

${o.join("\n")}

${r.join("\n")}

${i.join("\n")}

${c.join("\n")}

${a.join("\n")}`}generateBindPass(e){let t=new Map;this.vertex.uniforms.entries.forEach(e=>{let r=e.bind[o.P.Pass];r&&t.set(e.name,r)}),this.fragment.uniforms.entries.forEach(e=>{let r=e.bind[o.P.Pass];r&&t.set(e.name,r)});let r=Array.from(t.values()),i=r.length;return(t,n)=>{for(let o=0;o<i;++o)r[o](e,t,n)}}generateBindDraw(e){let t=new Map;this.vertex.uniforms.entries.forEach(e=>{let r=e.bind[o.P.Draw];r&&t.set(e.name,r)}),this.fragment.uniforms.entries.forEach(e=>{let r=e.bind[o.P.Draw];r&&t.set(e.name,r)});let r=Array.from(t.values()),i=r.length;return(t,n,o)=>{for(let a=0;a<i;++a)r[a](e,t,n,o)}}}class u{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(let t of e)this._add(t);return this._stage}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else s().error(`Trying to add null Uniform from ${Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}}class d{constructor(e){this._stage=e,this._entries=[]}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}}class h extends l{constructor(){super(...arguments),this.uniforms=new u(this),this.code=new d(this),this.constants=new g}get builder(){return this}}class f{constructor(){this._entries=[]}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map(e=>`in ${e[1]} ${e[0]};`)}}class m{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,a.hu)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){let t=[];return this._entries.forEach((r,i)=>t.push("vertex"===e?`out ${r} ${i};`:`in ${r} ${i};`)),t}}class p{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){let t="vertex"===e?p.ALLOWLIST_VERTEX:p.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(e=>t.includes(e)).map(e=>`#extension ${e} : enable`)}}p.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],p.ALLOWLIST_VERTEX=[];class v{constructor(){this._entries=new Map}add(e,t,r=0){let i=this._entries.get(r);i?(0,a.hu)(i.name===e&&i.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:v.DEFAULT_NAME,type:v.DEFAULT_TYPE});let t=[];return this._entries.forEach((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`)),t}}v.DEFAULT_TYPE="vec4",v.DEFAULT_NAME="fragColor";class g{constructor(){this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=g._numberToFloatStr(r);break;case"int":i=g._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])},                            ${g._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])},                             ${g._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,e=>g._numberToFloatStr(e)).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}let _="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",x="precision highp float;\nprecision highp sampler2D;"},61565:function(e,t,r){r.d(t,{R:function(){return o}});var i=r(32684),n=r(20002);class o extends i.x{constructor(e,t){super(e,"sampler2D",n.P.Draw,(r,i,n)=>r.bindTexture(e,t(i,n)))}}},12701:function(e,t,r){r.d(t,{A:function(){return o}});var i=r(32684),n=r(20002);class o extends i.x{constructor(e,t){super(e,"sampler2D",n.P.Pass,(r,i,n)=>r.bindTexture(e,t(i,n)))}}},32684:function(e,t,r){r.d(t,{x:function(){return n}});var i=r(20002);class n{constructor(e,t,r,n,o=null){if(this.name=e,this.type=t,this.arraySize=o,this.bind={[i.P.Pass]:null,[i.P.Draw]:null},n)switch(r){case i.P.Pass:this.bind[i.P.Pass]=n;break;case i.P.Draw:this.bind[i.P.Draw]=n}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},1755:function(e,t,r){var i;r.d(t,{H:function(){return a},K:function(){return o}});class n{}let o=n;function a(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+e[e.length-1]}(i=a||(a={})).int=function(e){return Math.round(e).toString()},i.float=function(e){return e.toPrecision(8)}},20002:function(e,t,r){var i,n;r.d(t,{P:function(){return i}}),(n=i||(i={}))[n.Pass=0]="Pass",n[n.Draw=1]="Draw"},10769:function(e,t,r){r.d(t,{J:function(){return i}});class i{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},53152:function(e,t,r){r.d(t,{A:function(){return o}});var i=r(36152),n=r(71193);class o{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=(0,i.M2)(this._program),this._pipeline=this._configuration=null}reload(e){(0,i.M2)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return n.MX.TRIANGLES}getPipeline(e,t,r){return this._pipeline}initializeConfiguration(e,t){}}},86624:function(e,t,r){r.d(t,{m:function(){return n},o:function(){return o}});var i=r(1755);class n extends i.K{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){let e=this._parameterNames,t={key:this.key};for(let r of e)t[r]=this[r];return t}}function o(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{let i=t._parameterNames.length-1,n=Math.ceil(Math.log2(e.count||2)),o=t._parameterBits??[0],a=0;for(;o[a]+n>16;)++a>=o.length&&o.push(0);t._parameterBits=o;let s=o[a],l=(1<<n)-1<<s;o[a]+=n,Object.defineProperty(t,r,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[a]=this._parameterBits[a]&~l|+e<<s&l,"number"!=typeof e&&"boolean"!=typeof e))throw Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}},86345:function(e,t,r){r.d(t,{c:function(){return n}});var i=r(38017);class n{constructor(){this.id=(0,i.D)()}}},56996:function(e,t,r){var i,n;r.d(t,{U:function(){return i}}),(n=i||(i={}))[n.Layer=0]="Layer",n[n.Object=1]="Object",n[n.Mesh=2]="Mesh",n[n.Line=3]="Line",n[n.Point=4]="Point",n[n.Material=5]="Material",n[n.Texture=6]="Texture",n[n.COUNT=7]="COUNT"},68940:function(e,t,r){r.d(t,{i:function(){return n}});var i=r(20186);let n=new Map([[i.T.POSITION,0],[i.T.NORMAL,1],[i.T.NORMALCOMPRESSED,1],[i.T.UV0,2],[i.T.COLOR,3],[i.T.COLORFEATUREATTRIBUTE,3],[i.T.SIZE,4],[i.T.TANGENT,4],[i.T.CENTEROFFSETANDDISTANCE,5],[i.T.SYMBOLCOLOR,5],[i.T.FEATUREATTRIBUTE,6],[i.T.INSTANCEFEATUREATTRIBUTE,6],[i.T.INSTANCECOLOR,7],[i.T.OBJECTANDLAYERIDCOLOR,7],[i.T.INSTANCEOBJECTANDLAYERIDCOLOR,7],[i.T.INSTANCEMODEL,8],[i.T.INSTANCEMODELNORMAL,12],[i.T.INSTANCEMODELORIGINHI,11],[i.T.INSTANCEMODELORIGINLO,15]])},36970:function(e,t,r){r.d(t,{F:function(){return l}});var i=r(36152),n=r(31124),o=r(1755),a=r(73295);class s{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){this._techniques.release(this._technique)}get technique(){return this._technique}get _stippleTextures(){return this._techniques.constructionContext.stippleTextures}get _markerTextures(){return this._techniques.constructionContext.markerTextures}ensureTechnique(e,t){return this._technique=this._techniques.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return a.Rw.LOADED}}class l extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,e=>this._texture=e),this._acquire(e.normalTextureId,e=>this._textureNormal=e),this._acquire(e.emissiveTextureId,e=>this._textureEmissive=e),this._acquire(e.occlusionTextureId,e=>this._textureOcclusion=e),this._acquire(e.metallicRoughnessTextureId,e=>this._textureMetallicRoughness=e)}dispose(){this._texture=(0,i.RY)(this._texture),this._textureNormal=(0,i.RY)(this._textureNormal),this._textureEmissive=(0,i.RY)(this._textureEmissive),this._textureOcclusion=(0,i.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Rw.LOADED:a.Rw.LOADING}get textureBindParameters(){return new c(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,i.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,e=>this._texture=e))}_acquire(e,t){if(null==e)return void t(null);let r=this._textures.acquire(e);if((0,n.y8)(r))return++this._numLoading,void r.then(e=>{if(this._disposed)return(0,i.RY)(e),void t(null);t(e)}).finally(()=>--this._numLoading);t(r)}}class c extends o.K{constructor(e=null,t=null,r=null,i=null,n=null,o,a){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=i,this.textureMetallicRoughness=n,this.scale=o,this.normalTextureTransformMatrix=a}}},87865:function(e,t,r){r.d(t,{F5:function(){return d},yD:function(){return n}});var i,n,o=r(82955);r(1755);var a=r(73295),s=r(86345),l=r(56996),c=r(68940),u=r(24031);class d extends s.c{constructor(e,t){super(),this.type=l.U.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=c.i,this._pp0=(0,o.al)(0,0,1),this._pp1=(0,o.al)(0,0,0),this._parameters=(0,u.Uf)(e,t),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,u.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===a.Iq.ON)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.isVisible()&&this.parameters.renderOccluded===e}intersectDraped(e,t,r,i,n,o){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,n)}}(i=n||(n={}))[i.None=0]="None",i[i.Occlude=1]="Occlude",i[i.Transparent=2]="Transparent",i[i.OccludeAndTransparent=4]="OccludeAndTransparent",i[i.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",i[i.Opaque=16]="Opaque"},93109:function(e,t,r){r.d(t,{$:function(){return o}});var i=r(35313),n=r(39972);class o{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new i.Z({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=(0,n.hZ)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){let t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)}),this._fragmentUniforms?.forEach(e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},4290:function(e,t,r){var i,n;r.d(t,{A:function(){return i}}),(n=i||(i={}))[n.ColorAlpha=0]="ColorAlpha",n[n.FrontFace=1]="FrontFace",n[n.NONE=2]="NONE",n[n.COUNT=3]="COUNT"},26158:function(e,t,r){r.d(t,{hu:function(){return n},yK:function(){return o}}),r(24168),r(91870),(0,r(40465).Ue)();class i{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function n(e,t){if(!e){let e=Error(t=t||"Assertion").stack;throw new i(`${t} at ${e}`)}}function o(e,t,r,i){let n,o=(r[0]-e[0])/t[0],a=(i[0]-e[0])/t[0];o>a&&(n=o,o=a,a=n);let s=(r[1]-e[1])/t[1],l=(i[1]-e[1])/t[1];if(s>l&&(n=s,s=l,l=n),o>l||s>a)return!1;s>o&&(o=s),l<a&&(a=l);let c=(r[2]-e[2])/t[2],u=(i[2]-e[2])/t[2];return c>u&&(n=c,c=u,u=n),!(o>u||c>a)&&(u<a&&(a=u),!(a<0))}},24031:function(e,t,r){r.d(t,{FZ:function(){return l},Uf:function(){return function e(t,r){let i=r?e(r):{};for(let e in t){let r=t[e];r?.forEach&&(r=function(e){let t=[];return e.forEach(e=>t.push(e)),t}(r)),null==r&&e in i||(i[e]=r)}return i}},LO:function(){return s},Hx:function(){return a}});var i=r(78628),n=r(13507);r(33516),(0,n.Vl)(10),(0,n.Vl)(12),(0,n.Vl)(70),(0,n.Vl)(40);let o={scale:0,factor:0,minScaleFactor:0};function a(e,t,r,i,a){var s,l;let c=(r.screenLength||0)*e.pixelRatio;null!=a&&(s=c,l=function(e,t,r){let i=r.parameters;return o.scale=Math.min(i.divisor/(t-i.offset),1),o.factor=Math.abs(e*e*e),o}(i,t,a),c=(0,n.t7)(s*Math.max(l.scale,l.minScaleFactor),s,l.factor));let u=c*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,n.uZ)(u*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function s(e,t){let r=!1;for(let n in t){let o=t[n];void 0!==o&&(Array.isArray(o)?null===e[n]?(e[n]=o.slice(),r=!0):(0,i.Vx)(e[n],o)&&(r=!0):e[n]!==o&&(r=!0,e[n]=o))}return r}let l={multiply:1,ignore:2,replace:3,tint:4}},83630:function(e,t,r){function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function n(e,t){let r=e.length;for(let i=0;i<r;++i)a[0]=e[i],t[i]=a[0];return t}function o(e,t){let r=e.length;for(let i=0;i<r;++i)a[0]=e[i],a[1]=e[i]-a[0],t[i]=a[1];return t}r.d(t,{GB:function(){return o},LF:function(){return i},U8:function(){return n}});let a=new Float32Array(2)},44163:function(e,t,r){r.d(t,{BK:function(){return d},LZ:function(){return u},if:function(){return o},jp:function(){return H},sm:function(){return h},wK:function(){return a},zp:function(){return c}});var i=r(73295),n=r(71193);function o(e,t,r=n.db.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i,o=n.db.ADD,a=n.db.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:o,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}let s={face:n.LR.BACK,mode:n.Wf.CCW},l={face:n.LR.FRONT,mode:n.Wf.CCW},c=e=>e===i.Vr.Back?s:e===i.Vr.Front?l:null,u={zNear:0,zFar:1},d={r:!0,g:!0,b:!0,a:!0};function h(e){return N.intern(e)}class f{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;let t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function m(e){return"["+e.join(",")+"]"}let p=new f(v,e=>({__tag:"Blending",...e}));function v(e){return e?m([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}let g=new f(_,e=>({__tag:"Culling",...e}));function _(e){return e?m([e.face,e.mode]):null}let x=new f(T,e=>({__tag:"PolygonOffset",...e}));function T(e){return e?m([e.factor,e.units]):null}let b=new f(S,e=>({__tag:"DepthTest",...e}));function S(e){return e?m([e.func]):null}let y=new f(w,e=>({__tag:"StencilTest",...e}));function w(e){return e?m([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}let E=new f(A,e=>({__tag:"DepthWrite",...e}));function A(e){return e?m([e.zNear,e.zFar]):null}let C=new f(M,e=>({__tag:"ColorWrite",...e}));function M(e){return e?m([e.r,e.g,e.b,e.a]):null}let O=new f(R,e=>({__tag:"StencilWrite",...e}));function R(e){return e?m([e.mask]):null}let I=new f(P,e=>({__tag:"DrawBuffers",...e}));function P(e){return e?m(e.buffers):null}let N=new f(function(e){return e?m([v(e.blending),_(e.culling),T(e.polygonOffset),S(e.depthTest),w(e.stencilTest),A(e.depthWrite),M(e.colorWrite),R(e.stencilWrite),P(e.drawBuffers)]):null},e=>{var t,r,i,n,o,a,s,l,c;return{blending:(t=e.blending,p.intern(t)),culling:(r=e.culling,g.intern(r)),polygonOffset:(i=e.polygonOffset,x.intern(i)),depthTest:(n=e.depthTest,b.intern(n)),stencilTest:(o=e.stencilTest,y.intern(o)),depthWrite:(a=e.depthWrite,E.intern(a)),colorWrite:(s=e.colorWrite,C.intern(s)),stencilWrite:(l=e.stencilWrite,O.intern(l)),drawBuffers:(c=e.drawBuffers,I.intern(c))}});class H{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._setDrawBuffers(e.drawBuffers),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(e){this._drawBuffers=this._setSubState(e,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}}}]);