

JS_SOURCES = 	vendor/jquery/dist/jquery.min.js \
				vendor/underscore-amd/underscore-min.js \
				vendor/bootstrap/dist/js/bootstrap.min.js \
				vendor/parse/parse.min.js \
				vendor/momentjs/min/moment-with-langs.min.js \
				vendor/pickadate/lib/compressed/picker.js \
				vendor/pickadate/lib/compressed/picker.date.js \
				vendor/pickadate/lib/compressed/picker.time.js \
				js/App.js \
				js/MyView.js \
				js/MealView.js \
				js/CleanView.js \
				js/RepairView.js \
				js/AppRouter.js \
				js/main.js

CSS_SOURCES = 	vendor/bootstrap/dist/css/bootstrap.min.css \
				vendor/pickadate/lib/themes/default.css \
				vendor/pickadate/lib/themes/default.date.css \
				vendor/pickadate/lib/themes/default.time.css \
				css/main.css

DIST = ../../bin/my.youplus.cc

PRODUCTION = root@162.243.137.244:/home/www

all: $(DIST)/index.html $(DIST)/app.js $(DIST)/app.css

$(DIST)/app.js: $(JS_SOURCES)
	uglifyjs $^ -o $@

$(DIST)/app.css: $(CSS_SOURCES)
	uglifycss $^ > $@

$(DIST)/index.html: index.html
# should modify to use app.js and app.css only
	cp index.html $(DIST)/

clean:
	rm -rf $(DIST)/*

deploy: all
	rsync -e ssh --progress --delete --force -avz $(DIST) $(PRODUCTION)