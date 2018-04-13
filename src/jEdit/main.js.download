$(function () {

    infuser.defaults.templateUrl = "../../Pages/view/templates";
    ko.bindingHandlers.visibleAndSelect = {
        update: function (element, valueAccessor) {
            ko.bindingHandlers.visible.update(element, valueAccessor);
            if (valueAccessor()) {
                setTimeout(function () {
                    $(element).find("input").focus().select();
                }, 0);
                //new tasks are not in DOM yet
            }
        }
    };




    ko.applyBindings(
        {
            isEditable: ko.observable(true),
            items: survey1,
            items2: new ObjectKoMenu(),           
            whichTemplateToUse2: function () {
                return 'menu';
            },
            whichTemplateToUse: function () {
                return 'view';
            }       
        });
  

    ko.bindingHandlers.sortable.afterMove = function (arg) {
        if (arg.item.isdefault) {
            arg.targetParent.replace(arg.item, new Task(arg.item.btype));
            survey1.nextqid++;
        }
    };
})