import{k,u as A,l as x,r as v,o as f,m as d,a as y,w as g,n as D,p as m,t as h,q as a,s as T,d as C,e as _}from"./vendor.78f108d8.js";import{A as s,B as P,H as r,O as B}from"./index.cbeba2f2.js";import{V as I,a as H}from"./VBtn.7bcd43fe.js";import{V}from"./VFooter.2aee99d1.js";function o(e){const i=e.rooms.reduce((c,p)=>c+p.size,0),u=e.bathrooms.reduce((c,p)=>c+p.size+(p.containsToilet?-1:0),0);return i+u+e.kitchen.size}function O(e){const i=e.rooms.filter(p=>p.isHeated).length,u=e.bathrooms.filter(p=>p.isHeated).length,c=e.kitchen.isHeated?2:0;return i+c+u}var w={0:202.58,1:202.58,2:202.58,3:202.58,4:202.58,5:202.58,6:202.58,7:202.58,8:202.58,9:202.58,10:202.58,11:202.58,12:202.58,13:202.58,14:202.58,15:202.58,16:202.58,17:202.58,18:202.58,19:202.58,20:202.58,21:202.58,22:202.58,23:202.58,24:202.58,25:202.58,26:202.58,27:202.58,28:202.58,29:202.58,30:202.58,31:202.58,32:202.58,33:202.58,34:202.58,35:202.58,36:202.58,37:202.58,38:202.58,39:202.58,40:202.58,41:207.65,42:212.69,43:217.77,44:222.82,45:227.87,46:232.96,47:238.01,48:243.08,49:248.15,50:253.21,51:258.24,52:263.33,53:268.38,54:273.45,55:278.51,56:283.61,57:288.61,58:293.68,59:298.78,60:303.83,61:308.87,62:313.95,63:318.99,64:324.07,65:329.13,66:334.2,67:339.27,68:344.31,69:349.36,70:354.42,71:359.5,72:364.57,73:369.61,74:374.69,75:379.74,76:384.82,77:389.87,78:394.95,79:400,80:405.07,81:410.61,82:416.16,83:421.73,84:427.27,85:432.86,86:438.41,87:443.95,88:449.52,89:455.06,90:460.65,91:466.19,92:471.73,93:477.31,94:482.85,95:488.41,96:493.97,97:499.55,98:505.1,99:510.67,100:516.22,101:521.77,102:527.3,103:532.87,104:538.44,105:543.97,106:549.56,107:555.11,108:560.66,109:566.23,110:571.79,111:577.36,112:582.9,113:588.45,114:594.03,115:599.59,116:605.13,117:610.69,118:616.23,119:621.79,120:627.35,121:632.93,122:638.49,123:644.03,124:649.61,125:655.16,126:660.7,127:666.26,128:671.87,129:677.37,130:682.95,131:688.51,132:694.05,133:699.63,134:705.16,135:710.75,136:716.27,137:721.85,138:727.42,139:732.95,140:738.51,141:744.09,142:749.62,143:755.18,144:760.75,145:766.32,146:771.86,147:777.43,148:782.98,149:788.54,150:794.09,151:799.65,152:805.2,153:810.76,154:816.31,155:821.87,156:827.41,157:833.01,158:838.54,159:844.13,160:849.67,161:855.22,162:860.8,163:866.33,164:871.88,165:877.45,166:883.02,167:888.56,168:894.11,169:899.71,170:905.25,171:910.8,172:916.35,173:921.94,174:927.47,175:933.03,176:938.58,177:944.14,178:949.71,179:955.26,180:960.79,181:966.4,182:971.95,183:977.49,184:983.03,185:988.61,186:994.17,187:999.71,188:1005.3,189:1010.84,190:1016.4,191:1021.97,192:1027.51,193:1033.08,194:1038.65,195:1044.2,196:1049.73,197:1055.3,198:1060.87,199:1066.4,200:1071.98,201:1077.52,202:1083.08,203:1088.63,204:1094.21,205:1099.77,206:1105.31,207:1110.89,208:1116.44,209:1121.99,210:1127.57,211:1133.11,212:1138.67,213:1144.23,214:1149.78,215:1155.34,216:1160.88,217:1166.45,218:1171.99,219:1177.57,220:1183.15,221:1188.67,222:1194.24,223:1199.8,224:1205.36,225:1210.9,226:1216.47,227:1222.03,228:1227.59,229:1233.16,230:1238.7,231:1244.25,232:1249.82,233:1255.37,234:1260.92,235:1266.5,236:1272.05,237:1277.6,238:1283.14,239:1288.72,240:1294.27,241:1299.83,242:1305.41,243:1310.95,244:1316.52,245:1322.08,246:1327.63,247:1333.15,248:1338.75,249:1344.29,250:1349.84,251:1349.86,252:1349.86,253:1349.86,254:1349.86,255:1349.86,256:1349.86,257:1349.86,258:1349.86,259:1349.86,260:1349.86,261:1349.86,262:1349.86,263:1349.86,264:1349.86,265:1349.86,266:1349.86,267:1349.86,268:1349.86,269:1349.86,270:1349.86,271:1349.86,272:1349.86,273:1349.86,274:1349.86,275:1349.86,276:1349.86,277:1349.86,278:1349.86,279:1349.86,280:1349.86,281:1349.86,282:1349.86,283:1349.86,284:1349.86,285:1349.86,286:1349.86,287:1349.86,288:1349.86,289:1349.86,290:1349.86,291:1349.86,292:1349.86,293:1349.86,294:1349.86,295:1349.86,296:1349.86,297:1349.86,298:1349.86,299:1349.86,300:1349.86,301:1349.86,302:1349.86,303:1349.86,304:1349.86,305:1349.86,306:1349.86,307:1349.86,308:1349.86,309:1349.86,310:1349.86,311:1349.86,312:1349.86,313:1349.86,314:1349.86,315:1349.86,316:1349.86,317:1349.86,318:1349.86,319:1349.86,320:1349.86,321:1349.86,322:1349.86,323:1349.86,324:1349.86,325:1349.86,326:1349.86,327:1349.86,328:1349.86,329:1349.86,330:1349.86,331:1349.86,332:1349.86,333:1349.86,334:1349.86,335:1349.86,336:1349.86,337:1349.86,338:1349.86,339:1349.86,340:1349.86,341:1349.86,342:1349.86,343:1349.86,344:1349.86,345:1349.86,346:1349.86,347:1349.86,348:1349.86,349:1349.86,350:1349.86,351:1349.86,352:1349.86,353:1349.86,354:1349.86,355:1349.86,356:1349.86,357:1349.86,358:1349.86,359:1349.86,360:1349.86,361:1349.86,362:1349.86,363:1349.86,364:1349.86,365:1349.86,366:1349.86,367:1349.86,368:1349.86,369:1349.86,370:1349.86,371:1349.86,372:1349.86,373:1349.86,374:1349.86,375:1349.86,376:1349.86,377:1349.86,378:1349.86,379:1349.86,380:1349.86,381:1349.86,382:1349.86,383:1349.86,384:1349.86,385:1349.86,386:1349.86,387:1349.86,388:1349.86,389:1349.86,390:1349.86,391:1349.86,392:1349.86,393:1349.86,394:1349.86,395:1349.86,396:1349.86,397:1349.86,398:1349.86,399:1349.86,400:1349.86,401:1349.86,402:1349.86,403:1349.86,404:1349.86,405:1349.86,406:1349.86,407:1349.86,408:1349.86,409:1349.86,410:1349.86,411:1349.86,412:1349.86,413:1349.86,414:1349.86,415:1349.86,416:1349.86,417:1349.86,418:1349.86,419:1349.86,420:1349.86,421:1349.86,422:1349.86,423:1349.86,424:1349.86,425:1349.86,426:1349.86,427:1349.86,428:1349.86,429:1349.86,430:1349.86,431:1349.86,432:1349.86,433:1349.86,434:1349.86,435:1349.86,436:1349.86,437:1349.86,438:1349.86,439:1349.86,440:1349.86,441:1349.86,442:1349.86,443:1349.86,444:1349.86,445:1349.86,446:1349.86,447:1349.86,448:1349.86,449:1349.86,450:1349.86,451:1349.86,452:1349.86,453:1349.86,454:1349.86,455:1349.86,456:1349.86,457:1349.86,458:1349.86,459:1349.86,460:1349.86,461:1349.86,462:1349.86,463:1349.86,464:1349.86,465:1349.86,466:1349.86,467:1349.86,468:1349.86,469:1349.86,470:1349.86,471:1349.86,472:1349.86,473:1349.86,474:1349.86,475:1349.86,476:1349.86,477:1349.86,478:1349.86,479:1349.86,480:1349.86,481:1349.86,482:1349.86,483:1349.86,484:1349.86,485:1349.86,486:1349.86,487:1349.86,488:1349.86,489:1349.86,490:1349.86,491:1349.86,492:1349.86,493:1349.86,494:1349.86,495:1349.86,496:1349.86,497:1349.86,498:1349.86,499:1349.86,500:1349.86,501:1349.86,502:1349.86,503:1349.86,504:1349.86,505:1349.86,506:1349.86,507:1349.86,508:1349.86,509:1349.86,510:1349.86,511:1349.86,512:1349.86,513:1349.86,514:1349.86,515:1349.86,516:1349.86,517:1349.86,518:1349.86,519:1349.86,520:1349.86,521:1349.86,522:1349.86,523:1349.86,524:1349.86,525:1349.86,526:1349.86,527:1349.86,528:1349.86,529:1349.86,530:1349.86,531:1349.86,532:1349.86,533:1349.86,534:1349.86,535:1349.86,536:1349.86,537:1349.86,538:1349.86,539:1349.86,540:1349.86,541:1349.86,542:1349.86,543:1349.86,544:1349.86,545:1349.86,546:1349.86,547:1349.86,548:1349.86,549:1349.86,550:1349.86,551:1349.86,552:1349.86,553:1349.86,554:1349.86,555:1349.86,556:1349.86,557:1349.86,558:1349.86,559:1349.86,560:1349.86,561:1349.86,562:1349.86,563:1349.86,564:1349.86,565:1349.86,566:1349.86,567:1349.86,568:1349.86,569:1349.86,570:1349.86,571:1349.86,572:1349.86,573:1349.86,574:1349.86,575:1349.86,576:1349.86,577:1349.86,578:1349.86,579:1349.86,580:1349.86,581:1349.86,582:1349.86,583:1349.86,584:1349.86,585:1349.86,586:1349.86,587:1349.86,588:1349.86,589:1349.86,590:1349.86,591:1349.86,592:1349.86,593:1349.86,594:1349.86,595:1349.86,596:1349.86,597:1349.86,598:1349.86,599:1349.86,600:1349.86,601:1349.86,602:1349.86,603:1349.86,604:1349.86,605:1349.86,606:1349.86,607:1349.86,608:1349.86,609:1349.86,610:1349.86,611:1349.86,612:1349.86,613:1349.86,614:1349.86,615:1349.86,616:1349.86,617:1349.86,618:1349.86,619:1349.86,620:1349.86,621:1349.86,622:1349.86,623:1349.86,624:1349.86,625:1349.86,626:1349.86,627:1349.86,628:1349.86,629:1349.86,630:1349.86,631:1349.86,632:1349.86,633:1349.86,634:1349.86,635:1349.86,636:1349.86,637:1349.86,638:1349.86,639:1349.86,640:1349.86,641:1349.86,642:1349.86,643:1349.86,644:1349.86,645:1349.86,646:1349.86,647:1349.86,648:1349.86,649:1349.86,650:1349.86,651:1349.86,652:1349.86,653:1349.86,654:1349.86,655:1349.86,656:1349.86,657:1349.86,658:1349.86,659:1349.86,660:1349.86,661:1349.86,662:1349.86,663:1349.86,664:1349.86,665:1349.86,666:1349.86,667:1349.86,668:1349.86,669:1349.86,670:1349.86,671:1349.86,672:1349.86,673:1349.86,674:1349.86,675:1349.86,676:1349.86,677:1349.86,678:1349.86,679:1349.86,680:1349.86,681:1349.86,682:1349.86,683:1349.86,684:1349.86,685:1349.86,686:1349.86,687:1349.86,688:1349.86,689:1349.86,690:1349.86,691:1349.86,692:1349.86,693:1349.86,694:1349.86,695:1349.86,696:1349.86,697:1349.86,698:1349.86,699:1349.86,700:1349.86,701:1349.86,702:1349.86,703:1349.86,704:1349.86,705:1349.86,706:1349.86,707:1349.86,708:1349.86,709:1349.86,710:1349.86,711:1349.86,712:1349.86,713:1349.86,714:1349.86,715:1349.86,716:1349.86,717:1349.86,718:1349.86,719:1349.86,720:1349.86,721:1349.86,722:1349.86,723:1349.86,724:1349.86,725:1349.86,726:1349.86,727:1349.86,728:1349.86,729:1349.86,730:1349.86,731:1349.86,732:1349.86,733:1349.86,734:1349.86,735:1349.86,736:1349.86,737:1349.86,738:1349.86,739:1349.86,740:1349.86,741:1349.86,742:1349.86,743:1349.86,744:1349.86,745:1349.86,746:1349.86,747:1349.86,748:1349.86,749:1349.86,750:1349.86,751:1349.86,752:1349.86,753:1349.86,754:1349.86,755:1349.86,756:1349.86,757:1349.86,758:1349.86,759:1349.86,760:1349.86,761:1349.86,762:1349.86,763:1349.86,764:1349.86,765:1349.86,766:1349.86,767:1349.86,768:1349.86,769:1349.86,770:1349.86,771:1349.86,772:1349.86,773:1349.86,774:1349.86,775:1349.86,776:1349.86,777:1349.86,778:1349.86,779:1349.86,780:1349.86,781:1349.86,782:1349.86,783:1349.86,784:1349.86,785:1349.86,786:1349.86,787:1349.86,788:1349.86,789:1349.86,790:1349.86,791:1349.86,792:1349.86,793:1349.86,794:1349.86,795:1349.86,796:1349.86,797:1349.86,798:1349.86,799:1349.86,800:1349.86,801:1349.86,802:1349.86,803:1349.86,804:1349.86,805:1349.86,806:1349.86,807:1349.86,808:1349.86,809:1349.86,810:1349.86,811:1349.86,812:1349.86,813:1349.86,814:1349.86,815:1349.86,816:1349.86,817:1349.86,818:1349.86,819:1349.86,820:1349.86,821:1349.86,822:1349.86,823:1349.86,824:1349.86,825:1349.86,826:1349.86,827:1349.86,828:1349.86,829:1349.86,830:1349.86,831:1349.86,832:1349.86,833:1349.86,834:1349.86,835:1349.86,836:1349.86,837:1349.86,838:1349.86,839:1349.86,840:1349.86,841:1349.86,842:1349.86,843:1349.86,844:1349.86,845:1349.86,846:1349.86,847:1349.86,848:1349.86,849:1349.86,850:1349.86,851:1349.86,852:1349.86,853:1349.86,854:1349.86,855:1349.86,856:1349.86,857:1349.86,858:1349.86,859:1349.86,860:1349.86,861:1349.86,862:1349.86,863:1349.86,864:1349.86,865:1349.86,866:1349.86,867:1349.86,868:1349.86,869:1349.86,870:1349.86,871:1349.86,872:1349.86,873:1349.86,874:1349.86,875:1349.86,876:1349.86,877:1349.86,878:1349.86,879:1349.86,880:1349.86,881:1349.86,882:1349.86,883:1349.86,884:1349.86,885:1349.86,886:1349.86,887:1349.86,888:1349.86,889:1349.86,890:1349.86,891:1349.86,892:1349.86,893:1349.86,894:1349.86,895:1349.86,896:1349.86,897:1349.86,898:1349.86,899:1349.86,900:1349.86,901:1349.86,902:1349.86,903:1349.86,904:1349.86,905:1349.86,906:1349.86,907:1349.86,908:1349.86,909:1349.86,910:1349.86,911:1349.86,912:1349.86,913:1349.86,914:1349.86,915:1349.86,916:1349.86,917:1349.86,918:1349.86,919:1349.86,920:1349.86,921:1349.86,922:1349.86,923:1349.86,924:1349.86,925:1349.86,926:1349.86,927:1349.86,928:1349.86,929:1349.86,930:1349.86,931:1349.86,932:1349.86,933:1349.86,934:1349.86,935:1349.86,936:1349.86,937:1349.86,938:1349.86,939:1349.86,940:1349.86,941:1349.86,942:1349.86,943:1349.86,944:1349.86,945:1349.86,946:1349.86,947:1349.86,948:1349.86,949:1349.86,950:1349.86,951:1349.86,952:1349.86,953:1349.86,954:1349.86,955:1349.86,956:1349.86,957:1349.86,958:1349.86,959:1349.86,960:1349.86,961:1349.86,962:1349.86,963:1349.86,964:1349.86,965:1349.86,966:1349.86,967:1349.86,968:1349.86,969:1349.86,970:1349.86,971:1349.86,972:1349.86,973:1349.86,974:1349.86,975:1349.86,976:1349.86,977:1349.86,978:1349.86,979:1349.86,980:1349.86,981:1349.86,982:1349.86,983:1349.86,984:1349.86,985:1349.86,986:1349.86,987:1349.86,988:1349.86,989:1349.86,990:1349.86,991:1349.86,992:1349.86,993:1349.86,994:1349.86,995:1349.86,996:1349.86,997:1349.86,998:1349.86,999:1349.86,1e3:1349.86,1001:1349.86,1002:1349.86,1003:1349.86,1004:1349.86,1005:1349.86,1006:1349.86,1007:1349.86,1008:1349.86,1009:1349.86,1010:1349.86,1011:1349.86,1012:1349.86,1013:1349.86,1014:1349.86,1015:1349.86,1016:1349.86,1017:1349.86,1018:1349.86,1019:1349.86,1020:1349.86,1021:1349.86,1022:1349.86,1023:1349.86,1024:1349.86,1025:1349.86,1026:1349.86,1027:1349.86,1028:1349.86,1029:1349.86,1030:1349.86,1031:1349.86,1032:1349.86,1033:1349.86,1034:1349.86,1035:1349.86,1036:1349.86,1037:1349.86,1038:1349.86,1039:1349.86,1040:1349.86,1041:1349.86,1042:1349.86,1043:1349.86,1044:1349.86,1045:1349.86,1046:1349.86,1047:1349.86,1048:1349.86,1049:1349.86,1050:1349.86,1051:1349.86,1052:1349.86,1053:1349.86,1054:1349.86,1055:1349.86,1056:1349.86,1057:1349.86,1058:1349.86,1059:1349.86,1060:1349.86,1061:1349.86,1062:1349.86,1063:1349.86,1064:1349.86,1065:1349.86,1066:1349.86,1067:1349.86,1068:1349.86,1069:1349.86,1070:1349.86,1071:1349.86,1072:1349.86,1073:1349.86,1074:1349.86,1075:1349.86,1076:1349.86,1077:1349.86,1078:1349.86,1079:1349.86,1080:1349.86,1081:1349.86,1082:1349.86,1083:1349.86,1084:1349.86,1085:1349.86,1086:1349.86,1087:1349.86,1088:1349.86,1089:1349.86,1090:1349.86,1091:1349.86,1092:1349.86,1093:1349.86,1094:1349.86,1095:1349.86,1096:1349.86,1097:1349.86,1098:1349.86,1099:1349.86,1100:1349.86,1101:1349.86,1102:1349.86,1103:1349.86,1104:1349.86,1105:1349.86,1106:1349.86,1107:1349.86,1108:1349.86,1109:1349.86,1110:1349.86,1111:1349.86,1112:1349.86,1113:1349.86,1114:1349.86,1115:1349.86,1116:1349.86,1117:1349.86,1118:1349.86,1119:1349.86,1120:1349.86,1121:1349.86,1122:1349.86,1123:1349.86,1124:1349.86,1125:1349.86,1126:1349.86,1127:1349.86,1128:1349.86,1129:1349.86,1130:1349.86,1131:1349.86,1132:1349.86,1133:1349.86,1134:1349.86,1135:1349.86,1136:1349.86,1137:1349.86,1138:1349.86,1139:1349.86,1140:1349.86,1141:1349.86,1142:1349.86,1143:1349.86,1144:1349.86,1145:1349.86,1146:1349.86,1147:1349.86,1148:1349.86,1149:1349.86,1150:1349.86,1151:1349.86,1152:1349.86,1153:1349.86,1154:1349.86,1155:1349.86,1156:1349.86,1157:1349.86,1158:1349.86,1159:1349.86,1160:1349.86,1161:1349.86,1162:1349.86,1163:1349.86,1164:1349.86,1165:1349.86,1166:1349.86,1167:1349.86,1168:1349.86,1169:1349.86,1170:1349.86,1171:1349.86,1172:1349.86,1173:1349.86,1174:1349.86,1175:1349.86,1176:1349.86,1177:1349.86,1178:1349.86,1179:1349.86,1180:1349.86,1181:1349.86,1182:1349.86,1183:1349.86,1184:1349.86,1185:1349.86,1186:1349.86,1187:1349.86,1188:1349.86,1189:1349.86,1190:1349.86,1191:1349.86,1192:1349.86,1193:1349.86,1194:1349.86,1195:1349.86,1196:1349.86,1197:1349.86,1198:1349.86,1199:1349.86,1200:1349.86,1201:1349.86,1202:1349.86,1203:1349.86,1204:1349.86,1205:1349.86,1206:1349.86,1207:1349.86,1208:1349.86,1209:1349.86,1210:1349.86,1211:1349.86,1212:1349.86,1213:1349.86,1214:1349.86,1215:1349.86,1216:1349.86,1217:1349.86,1218:1349.86,1219:1349.86,1220:1349.86,1221:1349.86,1222:1349.86,1223:1349.86,1224:1349.86,1225:1349.86,1226:1349.86,1227:1349.86,1228:1349.86,1229:1349.86,1230:1349.86,1231:1349.86,1232:1349.86,1233:1349.86,1234:1349.86,1235:1349.86,1236:1349.86,1237:1349.86,1238:1349.86,1239:1349.86,1240:1349.86,1241:1349.86,1242:1349.86,1243:1349.86,1244:1349.86,1245:1349.86,1246:1349.86,1247:1349.86,1248:1349.86,1249:1349.86,1250:1349.86,1251:1349.86,1252:1349.86,1253:1349.86,1254:1349.86,1255:1349.86,1256:1349.86,1257:1349.86,1258:1349.86,1259:1349.86,1260:1349.86,1261:1349.86,1262:1349.86,1263:1349.86,1264:1349.86,1265:1349.86,1266:1349.86,1267:1349.86,1268:1349.86,1269:1349.86,1270:1349.86,1271:1349.86,1272:1349.86,1273:1349.86,1274:1349.86,1275:1349.86,1276:1349.86,1277:1349.86,1278:1349.86,1279:1349.86,1280:1349.86,1281:1349.86,1282:1349.86,1283:1349.86,1284:1349.86,1285:1349.86,1286:1349.86,1287:1349.86,1288:1349.86,1289:1349.86,1290:1349.86,1291:1349.86,1292:1349.86,1293:1349.86,1294:1349.86,1295:1349.86,1296:1349.86,1297:1349.86,1298:1349.86,1299:1349.86,1300:1349.86,1301:1349.86,1302:1349.86,1303:1349.86,1304:1349.86,1305:1349.86,1306:1349.86,1307:1349.86,1308:1349.86,1309:1349.86,1310:1349.86,1311:1349.86,1312:1349.86,1313:1349.86,1314:1349.86,1315:1349.86,1316:1349.86,1317:1349.86,1318:1349.86,1319:1349.86,1320:1349.86,1321:1349.86,1322:1349.86,1323:1349.86,1324:1349.86,1325:1349.86,1326:1349.86,1327:1349.86,1328:1349.86,1329:1349.86,1330:1349.86,1331:1349.86,1332:1349.86,1333:1349.86,1334:1349.86,1335:1349.86,1336:1349.86,1337:1349.86,1338:1349.86,1339:1349.86,1340:1349.86,1341:1349.86,1342:1349.86,1343:1349.86,1344:1349.86,1345:1349.86,1346:1349.86,1347:1349.86,1348:1349.86,1349:1349.86,1350:1349.86,1351:1349.86,1352:1349.86,1353:1349.86,1354:1349.86,1355:1349.86,1356:1349.86,1357:1349.86,1358:1349.86,1359:1349.86,1360:1349.86,1361:1349.86,1362:1349.86,1363:1349.86,1364:1349.86,1365:1349.86,1366:1349.86,1367:1349.86,1368:1349.86,1369:1349.86,1370:1349.86,1371:1349.86,1372:1349.86,1373:1349.86,1374:1349.86,1375:1349.86,1376:1349.86,1377:1349.86,1378:1349.86,1379:1349.86,1380:1349.86,1381:1349.86,1382:1349.86,1383:1349.86,1384:1349.86,1385:1349.86,1386:1349.86,1387:1349.86,1388:1349.86,1389:1349.86,1390:1349.86,1391:1349.86,1392:1349.86,1393:1349.86,1394:1349.86,1395:1349.86,1396:1349.86,1397:1349.86,1398:1349.86,1399:1349.86,1400:1349.86,1401:1349.86,1402:1349.86,1403:1349.86,1404:1349.86,1405:1349.86,1406:1349.86,1407:1349.86,1408:1349.86,1409:1349.86,1410:1349.86,1411:1349.86,1412:1349.86,1413:1349.86,1414:1349.86,1415:1349.86,1416:1349.86,1417:1349.86,1418:1349.86,1419:1349.86,1420:1349.86,1421:1349.86,1422:1349.86,1423:1349.86,1424:1349.86,1425:1349.86,1426:1349.86,1427:1349.86,1428:1349.86,1429:1349.86,1430:1349.86,1431:1349.86,1432:1349.86,1433:1349.86,1434:1349.86,1435:1349.86,1436:1349.86,1437:1349.86,1438:1349.86,1439:1349.86,1440:1349.86,1441:1349.86,1442:1349.86,1443:1349.86,1444:1349.86,1445:1349.86,1446:1349.86,1447:1349.86,1448:1349.86,1449:1349.86,1450:1349.86,1451:1349.86,1452:1349.86,1453:1349.86,1454:1349.86,1455:1349.86,1456:1349.86,1457:1349.86,1458:1349.86,1459:1349.86,1460:1349.86,1461:1349.86,1462:1349.86,1463:1349.86,1464:1349.86,1465:1349.86,1466:1349.86,1467:1349.86,1468:1349.86,1469:1349.86,1470:1349.86,1471:1349.86,1472:1349.86,1473:1349.86,1474:1349.86,1475:1349.86,1476:1349.86,1477:1349.86,1478:1349.86,1479:1349.86,1480:1349.86,1481:1349.86,1482:1349.86,1483:1349.86,1484:1349.86,1485:1349.86,1486:1349.86,1487:1349.86,1488:1349.86,1489:1349.86,1490:1349.86,1491:1349.86,1492:1349.86,1493:1349.86,1494:1349.86,1495:1349.86,1496:1349.86,1497:1349.86,1498:1349.86,1499:1349.86,1500:1349.86};const M=[{premises:[e=>e.kitchen.counterTopLength>1&&e.kitchen.counterTopLength<=2],conclusion:e=>4},{premises:[e=>e.kitchen.counterTopLength>2],conclusion:e=>7},{premises:[e=>e.kitchen.appliances.includes(s.GasOrElectricStove)],conclusion:e=>.5},{premises:[e=>e.kitchen.appliances.includes(s.CeramicStove)],conclusion:e=>1.25},{premises:[e=>e.kitchen.appliances.includes(s.LuxuriousStove)],conclusion:e=>.75},{premises:[e=>e.kitchen.appliances.includes(s.InductionStove)],conclusion:e=>1.5},{premises:[e=>e.kitchen.appliances.includes(s.OvenOrMicrowave)],conclusion:e=>.75},{premises:[e=>e.kitchen.appliances.includes(s.ComboOvenMicrowave)],conclusion:e=>1.5},{premises:[e=>e.kitchen.appliances.includes(s.OvenIncludingStove)],conclusion:e=>1.25},{premises:[e=>e.kitchen.appliances.includes(s.ExtractorHood)],conclusion:e=>.5},{premises:[e=>e.kitchen.appliances.includes(s.Fridge)],conclusion:e=>.75},{premises:[e=>e.kitchen.appliances.includes(s.Freezer)],conclusion:e=>.5},{premises:[e=>e.kitchen.appliances.includes(s.ComboFridgeFreezer)],conclusion:e=>1.25},{premises:[e=>e.kitchen.appliances.includes(s.Dishwasher)],conclusion:e=>1.25},{premises:[e=>e.kitchen.appliances.includes(s.LuxuriousMixerTap)],conclusion:e=>.25},{premises:[e=>e.kitchen.appliances.includes(s.ThermostaticMixerTap)],conclusion:e=>.5},{premises:[e=>e.kitchen.appliances.includes(s.DoubleSink)],conclusion:e=>.25},{premises:[e=>e.kitchen.otherDrawers>2],conclusion:e=>(e.kitchen.otherDrawers-2)*.5}],R=[{premises:[e=>e.bathroomAppliances.includes(P.ShowerOrBathtub)],conclusion:e=>6},{premises:[e=>e.bathroomAppliances.includes(P.ShowerAndBathtub)],conclusion:e=>7},{premises:[e=>e.bathroomAppliances.includes(P.Sink)],conclusion:e=>4},{premises:[e=>e.bathroomAppliances.includes(P.Sink)],conclusion:e=>4},{premises:[],conclusion:e=>3}];function n(e){if(e.energyPerformance.energyLabel)return e.energyPerformance.energyLabel;if(e.energyPerformance.buildYearOfHouse&&e.houseType===r.SingleFamily&&e.energyPerformance.buildYearOfHouse>=2002)return"A";if(e.energyPerformance.buildYearOfHouse&&e.houseType===r.SingleFamily&&e.energyPerformance.buildYearOfHouse>=2e3&&e.energyPerformance.buildYearOfHouse<=2001)return"B";if(e.energyPerformance.buildYearOfHouse&&e.houseType===r.SingleFamily&&e.energyPerformance.buildYearOfHouse>=1998&&e.energyPerformance.buildYearOfHouse<=1999||e.energyPerformance.buildYearOfHouse&&e.houseType===r.SingleFamily&&e.energyPerformance.buildYearOfHouse>=1992&&e.energyPerformance.buildYearOfHouse<=1997)return"C";if(e.energyPerformance.buildYearOfHouse&&e.houseType===r.SingleFamily&&e.energyPerformance.buildYearOfHouse>=1984&&e.energyPerformance.buildYearOfHouse<=1991)return"D";if(e.energyPerformance.buildYearOfHouse&&e.houseType===r.SingleFamily&&e.energyPerformance.buildYearOfHouse>=1979&&e.energyPerformance.buildYearOfHouse<=1983)return"E";if(e.energyPerformance.buildYearOfHouse&&e.houseType===r.SingleFamily&&e.energyPerformance.buildYearOfHouse>=1977&&e.energyPerformance.buildYearOfHouse<=1978)return"F";if(e.energyPerformance.buildYearOfHouse&&e.houseType===r.SingleFamily&&e.energyPerformance.buildYearOfHouse<=1976)return"G";if(e.energyPerformance.buildYearOfHouse&&e.houseType===r.Duplex&&e.energyPerformance.buildYearOfHouse>=2002)return"A";if(e.energyPerformance.buildYearOfHouse&&e.houseType===r.Duplex&&e.energyPerformance.buildYearOfHouse>=2e3&&e.energyPerformance.buildYearOfHouse<=2001)return"B";if(e.energyPerformance.buildYearOfHouse&&e.houseType===r.Duplex&&e.energyPerformance.buildYearOfHouse>=1998&&e.energyPerformance.buildYearOfHouse<=1999)return"C";if(e.energyPerformance.buildYearOfHouse&&e.houseType===r.Duplex&&e.energyPerformance.buildYearOfHouse>=1992&&e.energyPerformance.buildYearOfHouse<=1997||e.energyPerformance.buildYearOfHouse&&e.houseType===r.Duplex&&e.energyPerformance.buildYearOfHouse>=1984&&e.energyPerformance.buildYearOfHouse<=1991)return"D";if(e.energyPerformance.buildYearOfHouse&&e.houseType===r.Duplex&&e.energyPerformance.buildYearOfHouse>=1979&&e.energyPerformance.buildYearOfHouse<=1983)return"E";if(e.energyPerformance.buildYearOfHouse&&e.houseType===r.Duplex&&e.energyPerformance.buildYearOfHouse>=1977&&e.energyPerformance.buildYearOfHouse<=1978)return"F";if(e.energyPerformance.buildYearOfHouse&&e.houseType===r.Duplex&&e.energyPerformance.buildYearOfHouse<=1976)return"G"}const E=[{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.SingleFamily&&e.energyPerformance.energyIndex<=.6],conclusion:e=>44},{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.SingleFamily&&e.energyPerformance.energyIndex>.6&&e.energyPerformance.energyIndex<=.8],conclusion:e=>40},{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.SingleFamily&&e.energyPerformance.energyIndex>.8&&e.energyPerformance.energyIndex<=1.2],conclusion:e=>36},{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.SingleFamily&&e.energyPerformance.energyIndex>1.2&&e.energyPerformance.energyIndex<=1.4],conclusion:e=>32},{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.SingleFamily&&e.energyPerformance.energyIndex>1.4&&e.energyPerformance.energyIndex<=1.8],conclusion:e=>22},{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.SingleFamily&&e.energyPerformance.energyIndex>1.8&&e.energyPerformance.energyIndex<=2.1],conclusion:e=>14},{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.SingleFamily&&e.energyPerformance.energyIndex>2.1&&e.energyPerformance.energyIndex<=2.4],conclusion:e=>8},{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.SingleFamily&&e.energyPerformance.energyIndex>2.4&&e.energyPerformance.energyIndex<=2.7],conclusion:e=>4},{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.SingleFamily&&e.energyPerformance.energyIndex>2.7],conclusion:e=>0},{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.Duplex&&e.energyPerformance.energyIndex<=.6],conclusion:e=>40},{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.Duplex&&e.energyPerformance.energyIndex>.6&&e.energyPerformance.energyIndex<=.8],conclusion:e=>36},{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.Duplex&&e.energyPerformance.energyIndex>.8&&e.energyPerformance.energyIndex<=1.2],conclusion:e=>32},{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.Duplex&&e.energyPerformance.energyIndex>1.2&&e.energyPerformance.energyIndex<=1.4],conclusion:e=>28},{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.Duplex&&e.energyPerformance.energyIndex>1.4&&e.energyPerformance.energyIndex<=1.8],conclusion:e=>15},{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.Duplex&&e.energyPerformance.energyIndex>1.8&&e.energyPerformance.energyIndex<=2.1],conclusion:e=>11},{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.Duplex&&e.energyPerformance.energyIndex>2.1&&e.energyPerformance.energyIndex<=2.4],conclusion:e=>5},{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.Duplex&&e.energyPerformance.energyIndex>2.4&&e.energyPerformance.energyIndex<=2.7],conclusion:e=>1},{premises:[e=>e.energyPerformance.energyIndex&&e.houseType===r.Duplex&&e.energyPerformance.energyIndex>2.7],conclusion:e=>0},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="A++"],conclusion:e=>52},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="A+"],conclusion:e=>48},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="A"],conclusion:e=>44},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="B"],conclusion:e=>40},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="C"],conclusion:e=>36},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="D"],conclusion:e=>32},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="E"],conclusion:e=>22},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="F"],conclusion:e=>4},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="G"],conclusion:e=>0},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.Duplex&&n(e)==="A++"],conclusion:e=>48},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.Duplex&&n(e)==="A+"],conclusion:e=>44},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.Duplex&&n(e)==="A"],conclusion:e=>40},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.Duplex&&n(e)==="B"],conclusion:e=>36},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.Duplex&&n(e)==="C"],conclusion:e=>32},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.Duplex&&n(e)==="D"],conclusion:e=>28},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.Duplex&&n(e)==="E"],conclusion:e=>15},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.Duplex&&n(e)==="F"],conclusion:e=>1},{premises:[e=>o(e)<25&&n(e)&&e.houseType===r.Duplex&&n(e)==="G"],conclusion:e=>0},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="A++"],conclusion:e=>48},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="A+"],conclusion:e=>44},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="A"],conclusion:e=>40},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="B"],conclusion:e=>36},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="C"],conclusion:e=>32},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="D"],conclusion:e=>22},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="E"],conclusion:e=>14},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="F"],conclusion:e=>4},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="G"],conclusion:e=>0},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.Duplex&&n(e)==="A++"],conclusion:e=>44},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.Duplex&&n(e)==="A+"],conclusion:e=>40},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.Duplex&&n(e)==="A"],conclusion:e=>36},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.Duplex&&n(e)==="B"],conclusion:e=>32},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.Duplex&&n(e)==="C"],conclusion:e=>28},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.Duplex&&n(e)==="D"],conclusion:e=>15},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.Duplex&&n(e)==="E"],conclusion:e=>11},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.Duplex&&n(e)==="F"],conclusion:e=>1},{premises:[e=>o(e)>=25&&o(e)<=40&&n(e)&&e.houseType===r.Duplex&&n(e)==="G"],conclusion:e=>0},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="A++"],conclusion:e=>44},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="A+"],conclusion:e=>40},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="A"],conclusion:e=>36},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="B"],conclusion:e=>32},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="C"],conclusion:e=>22},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="D"],conclusion:e=>14},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="E"],conclusion:e=>8},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="F"],conclusion:e=>4},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.SingleFamily&&n(e)==="G"],conclusion:e=>0},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.Duplex&&n(e)==="A++"],conclusion:e=>40},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.Duplex&&n(e)==="A+"],conclusion:e=>36},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.Duplex&&n(e)==="A"],conclusion:e=>32},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.Duplex&&n(e)==="B"],conclusion:e=>28},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.Duplex&&n(e)==="C"],conclusion:e=>15},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.Duplex&&n(e)==="D"],conclusion:e=>11},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.Duplex&&n(e)==="E"],conclusion:e=>5},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.Duplex&&n(e)==="F"],conclusion:e=>1},{premises:[e=>o(e)>40&&n(e)&&e.houseType===r.Duplex&&n(e)==="G"],conclusion:e=>0}],z=[{premises:[e=>e.houseValue!==void 0],conclusion:e=>Math.round(e.houseValue/11041+e.houseValue/(o(e)?o(e):98)/172)},{premises:[e=>e.houseValue===void 0],conclusion:e=>Math.round(55888/11041+55888/(o(e)?o(e):98)/172)}];function l(e){return Math.round(e.outdoorSpaces.filter(i=>i.isShared===!1).reduce((i,u)=>Math.round(u.size*100)/100,0))}const G=e=>e.outdoorSpaces.filter(i=>i.type===B.Carport).length>0,L=[{premises:[e=>l(e)===0],conclusion:e=>-5},{premises:[e=>l(e)>0&&l(e)<25],conclusion:e=>2},{premises:[e=>l(e)>26&&l(e)<=50],conclusion:e=>4},{premises:[e=>l(e)>51&&l(e)<=75],conclusion:e=>6},{premises:[e=>l(e)>76&&l(e)<=99],conclusion:e=>8},{premises:[e=>l(e)>100&&l(e)<=125],conclusion:e=>10},{premises:[e=>l(e)>126&&l(e)<=150],conclusion:e=>12},{premises:[e=>l(e)>151&&l(e)<=175],conclusion:e=>14},{premises:[e=>l(e)>176],conclusion:e=>15},{premises:[e=>G(e)],conclusion:()=>2}],j=[{premises:[e=>e.isMonument],conclusion:e=>50},{premises:[e=>o(e)!=0],conclusion:e=>o(e)},{premises:[e=>O(e)!=0],conclusion:e=>O(e)*2},...M,...R,...E,...z,...L];function Y(e){return Math.max(0,Math.round(j.reduce((i,u)=>(u.premises.every(c=>c(e))&&console.log(u.premises,u.premises.every(c=>c(e))&&u.conclusion(e)||0),i+(u.premises.every(c=>c(e))&&u.conclusion(e)||0)),0)))}function N(e){const i=Y(e);return w[i]+Math.max(0,i-250)*5.55}const W=_("h4",null," Results ",-1),q=_("p",null," You've finished the rent checker \u{1F60A}! You can see the maximum price of your apartment below. This means that your landlord is legally prohibited to take anything higher than this price. ",-1),K={key:0,class:"mb-10 mt-10"},J={key:1,class:"mb-10 mt-10"},Q={key:2},U=_("b",null,"all the money",-1),X=T(" back that you overpaid. But make sure to start the procedure at latest 6 months after your contract started, since after that it's not possible anymore. "),Z={key:3},$=T("mdi-arrow-left"),t=_("span",null,"Go back",-1),e1=_("span",null,"Restart",-1),n1=T("mdi-arrow-right"),s1=k({setup(e){const i=A(),u=x(()=>Y(i.state)),c=x(()=>N(i.state)),p=x(()=>i.state.currentRent),S=x(()=>Math.round(Math.abs(p.value-c.value)));return(r1,o1)=>{const F=v("router-link");return f(),d("div",null,[y(C,null,{default:g(()=>[y(D,{class:"ma-4 mb-10",justify:"center"},{default:g(()=>[W]),_:1}),y(D,null,{default:g(()=>[q,m(u)<1501?(f(),d("p",K," You have a score of "+h(m(u))+" points. This means that your maximum rental price is \u20AC "+h(m(c))+". ",1)):a("",!0),m(u)>600?(f(),d("p",J," You have a score of "+h(m(u))+" points. This is a lot higher than the scale of points go. Are you sure you filled in everything correctly? \u{1F605} ",1)):a("",!0),m(c)<m(p)?(f(),d("p",Q,[T(" Congratulations! \u{1F389} You are paying \u20AC "+h(m(S))+" too much per month. Thus, you could get a lawyer and start a rent reduction procedure to get ",1),U,X])):a("",!0),m(c)>m(p)?(f(),d("p",Z," You are paying \u20AC "+h(m(S))+" too little per month. Best not to let your landlord know! \u{1F92B} ",1)):a("",!0)]),_:1})]),_:1}),y(V,{class:"d-flex align-center justify-space-between pa-8"},{default:g(()=>[y(F,{to:{name:"Monument"},custom:""},{default:g(({navigate:b})=>[y(I,{class:"ma-2 secondary",elevation:"1",size:"large",variant:"outlined",onClick:b},{default:g(()=>[y(H,null,{default:g(()=>[$]),_:1}),t]),_:2},1032,["onClick"])]),_:1}),y(F,{to:{name:"Startpage"},custom:""},{default:g(({navigate:b})=>[y(I,{class:"ma-2",elevation:"4",size:"large",variant:"outlined",onClick:b},{default:g(()=>[e1,y(H,null,{default:g(()=>[n1]),_:1})]),_:2},1032,["onClick"])]),_:1})]),_:1})])}}});export{s1 as default};
